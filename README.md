# slate-debug-visualizer

## Overview

`slate-debug-visualizer` is a [slate](https://github.com/ianstormtaylor/slate) integration for [vscode-debug-visualizer](https://marketplace.visualstudio.com/items?itemName=hediet.debug-visualizer). It provides visualization of slate document model, making debugging slate editor easlier.

![Demo](./docs/slate.gif)

## Installation

```bash
# using npm
npm install slate-debug-visualizer --save

# or using yarn
yarn add slate-debug-visualizer
```

## Usage

Just apply the plugin `withVisualization` on your slate editor and the visualization is available in `vscode-debug-visualizer`

```ts
import { withVisualization } from 'slate-debug-visualizer'
const editor = () => withVisualization(createEditor())
```

## Demo

A simple demo is available [here](./examples/slate-debug-visualizer-example)
