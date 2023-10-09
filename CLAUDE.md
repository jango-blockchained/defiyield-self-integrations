# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the DeFiYield Self Integrations monorepo - a workspace for creating blockchain protocol integrations that track user positions, pool data, and token prices across multiple chains and DeFi protocols.

## Architecture

The project is organized as a Yarn workspace monorepo with two main applications:

- **Workshop** (`apps/workshop/`): Development environment for creating and testing protocol integrations
- **Sandbox** (`apps/sandbox/`): Web interface for testing integrations with a Next.js frontend and Koa backend

### Key Directories

- `apps/workshop/projects/`: Individual protocol integrations (e.g., AuraFinance, Bolide, etc.)
- `packages/`: Shared utilities including ABIs, testing helpers, ESLint configs, and TypeScript configs
- `apps/sandbox/src/types/`: Core type definitions for the integration system

## Common Development Commands

### Root Level
```bash
# Install dependencies
yarn install

# Format code
yarn format

# Check formatting
yarn format:check

# Run linting
yarn lint
```

### Workshop (Development Environment)
```bash
# Create new integration project
yarn workshop make <ProjectName>

# Start development server for a project
yarn workshop start <ProjectName>

# Run tests
yarn workshop test

# List available projects
yarn workshop ls

# Build workshop
yarn workshop build
```

### Sandbox (Web Interface)
```bash
# Start sandbox (typically runs on http://localhost:8070)
yarn sandbox start
```

## Testing

Tests use Vitest and are located in `projects/**/*.spec.ts`. Key testing utilities:

- `createTestProject()`: Creates a testing instance of an entire project
- `createMockContext()`: Creates mock context for testing individual modules
- Mock contracts and HTTP requests using provided testing helpers

Run tests with:
```bash
yarn workshop test
```

## Integration Development

### Module Structure

Each integration project follows this structure:
```
projects/ProjectName/
├── index.ts          # Project configuration and module exports
├── modules/          # Core integration logic
├── abis/            # Contract ABIs
├── helpers/         # Utility functions
├── icons/           # Project assets
└── tests/           # Test files
```

### Core Module Interface

All modules must implement `ModuleDefinitionInterface`:

1. **preloadTokens()**: Return token addresses used by the module
2. **fetchPools()**: Return all available pools with APR calculations
3. **fetchUserPositions()**: Return user balances and rewards for pools

### Supported Chains

The system supports 30+ chains including Ethereum, Polygon, Arbitrum, Avalanche, Solana, Cosmos chains, and more. See `apps/sandbox/src/types/module.ts` for the complete list.

### Context Object

All module methods receive a context object with:
- `ethers`: Ethers.js library and provider
- `ethcall`: Ethcall for efficient batched calls
- `axios`: HTTP client
- `BigNumber`: BigNumber.js for calculations
- `logger`: Logging utilities
- Chain-specific utilities (Solana, Cardano, Tezos)

## Development Workflow

1. Generate boilerplate: `yarn workshop make <ProjectName>`
2. Implement module methods in `modules/` directory
3. Add tests in `tests/` directory
4. Test with: `yarn workshop test`
5. Preview in browser: `yarn workshop start <ProjectName>`

## Linting and Formatting

The project uses ESLint and Prettier with strict configurations. Always run linting before committing:

```bash
yarn lint
yarn format:check
```

## Dependencies

Key dependencies include:
- **ethers**: Ethereum interactions
- **ethcall**: Batch contract calls
- **axios**: HTTP requests
- **bignumber.js**: Precise number calculations
- **vitest**: Testing framework
- **Next.js**: Frontend framework (sandbox)
- **Koa**: Backend framework (sandbox)

## Module Types

- **staking**: Token staking pools
- **lending**: Lending/borrowing protocols
- **pools**: General liquidity pools
- **claimable**: Reward claiming mechanisms
- **leverageFarming**: Leveraged farming positions