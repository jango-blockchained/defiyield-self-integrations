export function range(start: number, end: number): number[] {
  return [...new Array(end).keys()].map((a) => a + start);
}

export function chunk<T>(array: T[], chunkSize: number): T[][] {
  if (chunkSize <= 0) {
    throw new Error('Chunk size must be greater than 0');
  }
  
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export function findToken<T extends { address: string }>(tokens: T[]) {
  return (address: string): T => {
    const t = tokens.find((token) => token.address.toLowerCase() === address.toLowerCase());
    if (!t) {
      throw new Error(`Failed to find token - (${address})`);
    }
    return t;
  };
}

interface EthcallContract {
  address: string;
}

interface EthcallCall {
  contract: EthcallContract;
  name: string;
  inputs: readonly unknown[];
  outputs: readonly unknown[];
  params: unknown;
}

interface EthcallProvider {
  all(calls: EthcallCall[]): Promise<unknown[]>;
}

export function createMulticallChunker(ethcallProvider: EthcallProvider) {
  return async <T>(array: T[], callback: (item: T, index: number, original: T[]) => EthcallCall[]) => {
    const groups: number[] = [];

    const calls = array.flatMap((...args) => {
      const rawResults = callback(...args);
      // co-erce into an array if none was returned
      const results = Array.isArray(rawResults) ? rawResults : [rawResults];
      groups.push(results.length);
      return results;
    });

    const final = [];
    const results = await ethcallProvider.all(calls);
    for (const group of groups) {
      final.push(results.splice(0, group));
    }
    return final;
  };
}
