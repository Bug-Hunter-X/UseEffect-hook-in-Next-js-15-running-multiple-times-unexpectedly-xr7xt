# Next.js 15 useEffect Hook Unexpected Behavior

This repository demonstrates an unusual issue encountered in Next.js 15 where a `useEffect` hook within a component runs multiple times, leading to unexpected behavior. This issue is specific to Next.js 15 and does not reproduce in Next.js 13.

## Problem Description

The `About` page contains a `useEffect` hook that is supposed to increment a counter every second. However, in Next.js 15, the `useEffect` runs multiple times, causing the counter to increment at a rate much faster than intended.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm run dev`.

## Steps to Reproduce

1. Navigate to the `/about` page.
2. Observe the rapidly increasing counter.

## Solution

The solution involves making changes to the component to prevent the re-rendering during the state change.  See the `aboutSolution.js` file for the correction.

## Note

This issue seems to be related to Next.js 15's rendering behavior. The solution provided addresses the immediate problem, but further investigation might be needed to fully understand the root cause and ensure broader compatibility.