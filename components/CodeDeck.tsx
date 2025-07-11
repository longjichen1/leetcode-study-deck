'use client';

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const problems = [
  {
    id: 1,
    title: "Contains Duplicate",
    url: "https://leetcode.com/problems/contains-duplicate/",
    topic: "Arrays & Hashing",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Valid Anagram",
    url: "https://leetcode.com/problems/valid-anagram/",
    topic: "Arrays & Hashing",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Two Sum",
    url: "https://leetcode.com/problems/two-sum/",
    topic: "Arrays & Hashing",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Group Anagrams",
    url: "https://leetcode.com/problems/group-anagrams/",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
  },
  {
    id: 5,
    title: "Top K Frequent Elements",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
  },
  {
    id: 6,
    title: "Encode and Decode Strings",
    url: "https://leetcode.com/problems/encode-and-decode-strings/",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
  },
  {
    id: 7,
    title: "Product of Array Except Self",
    url: "https://leetcode.com/problems/product-of-array-except-self/",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
  },
  {
    id: 8,
    title: "Valid Sudoku",
    url: "https://leetcode.com/problems/valid-sudoku/",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
  },
  {
    id: 9,
    title: "Longest Consecutive Sequence",
    url: "https://leetcode.com/problems/longest-consecutive-sequence/",
    topic: "Arrays & Hashing",
    difficulty: "Hard",
  },
    {
    id: 10,
    title: "Valid Palindrome",
    url: "https://leetcode.com/problems/valid-palindrome/",
    topic: "Two Pointers",
    difficulty: "Easy",
  },
  {
    id: 11,
    title: "Two Sum II - Input Array Is Sorted",
    url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    topic: "Two Pointers",
    difficulty: "Easy",
  },
  {
    id: 12,
    title: "3Sum",
    url: "https://leetcode.com/problems/3sum/",
    topic: "Two Pointers",
    difficulty: "Medium",
  },
  {
    id: 13,
    title: "Container With Most Water",
    url: "https://leetcode.com/problems/container-with-most-water/",
    topic: "Two Pointers",
    difficulty: "Medium",
  },
  {
    id: 14,
    title: "Trapping Rain Water",
    url: "https://leetcode.com/problems/trapping-rain-water/",
    topic: "Two Pointers",
    difficulty: "Hard",
  },
    {
    id: 15,
    title: "Best Time to Buy and Sell Stock",
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    topic: "Sliding Window",
    difficulty: "Easy",
  },
  {
    id: 16,
    title: "Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    topic: "Sliding Window",
    difficulty: "Medium",
  },
  {
    id: 17,
    title: "Longest Repeating Character Replacement",
    url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    topic: "Sliding Window",
    difficulty: "Medium",
  },
  {
    id: 18,
    title: "Permutation in String",
    url: "https://leetcode.com/problems/permutation-in-string/",
    topic: "Sliding Window",
    difficulty: "Medium",
  },
  {
    id: 19,
    title: "Minimum Window Substring",
    url: "https://leetcode.com/problems/minimum-window-substring/",
    topic: "Sliding Window",
    difficulty: "Hard",
  },
  {
    id: 20,
    title: "Sliding Window Maximum",
    url: "https://leetcode.com/problems/sliding-window-maximum/",
    topic: "Sliding Window",
    difficulty: "Hard",
  },
  {
    id: 21,
    title: "Valid Parentheses",
    url: "https://leetcode.com/problems/valid-parentheses/",
    topic: "Stack",
    difficulty: "Easy",
  },
  {
    id: 22,
    title: "Min Stack",
    url: "https://leetcode.com/problems/min-stack/",
    topic: "Stack",
    difficulty: "Easy",
  },
  {
    id: 23,
    title: "Evaluate Reverse Polish Notation",
    url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    topic: "Stack",
    difficulty: "Medium",
  },
  {
    id: 24,
    title: "Generate Parentheses",
    url: "https://leetcode.com/problems/generate-parentheses/",
    topic: "Stack",
    difficulty: "Medium",
  },
  {
    id: 25,
    title: "Daily Temperatures",
    url: "https://leetcode.com/problems/daily-temperatures/",
    topic: "Stack",
    difficulty: "Medium",
  },
  {
    id: 26,
    title: "Car Fleet",
    url: "https://leetcode.com/problems/car-fleet/",
    topic: "Stack",
    difficulty: "Medium",
  },
  {
    id: 27,
    title: "Largest Rectangle In Histogram",
    url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    topic: "Stack",
    difficulty: "Hard",
  },
   {
    id: 28,
    title: "Binary Search",
    url: "https://leetcode.com/problems/binary-search/",
    topic: "Binary Search",
    difficulty: "Easy",
  },
  {
    id: 29,
    title: "Search a 2D Matrix",
    url: "https://leetcode.com/problems/search-a-2d-matrix/",
    topic: "Binary Search",
    difficulty: "Medium",
  },
  {
    id: 30,
    title: "Koko Eating Bananas",
    url: "https://leetcode.com/problems/koko-eating-bananas/",
    topic: "Binary Search",
    difficulty: "Medium",
  },
  {
    id: 31,
    title: "Find Minimum In Rotated Sorted Array",
    url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    topic: "Binary Search",
    difficulty: "Medium",
  },
  {
    id: 32,
    title: "Search In Rotated Sorted Array",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    topic: "Binary Search",
    difficulty: "Medium",
  },
  {
    id: 33,
    title: "Time Based Key Value Store",
    url: "https://leetcode.com/problems/time-based-key-value-store/",
    topic: "Binary Search",
    difficulty: "Medium",
  },
  {
    id: 34,
    title: "Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    topic: "Binary Search",
    difficulty: "Hard",
  },
  {
    id: 35,
    title: "Reverse Linked List",
    url: "https://leetcode.com/problems/reverse-linked-list/",
    topic: "Linked List",
    difficulty: "Easy",
  },
  {
    id: 36,
    title: "Merge Two Sorted Lists",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    topic: "Linked List",
    difficulty: "Easy",
  },
  {
    id: 37,
    title: "Linked List Cycle",
    url: "https://leetcode.com/problems/linked-list-cycle/",
    topic: "Linked List",
    difficulty: "Easy",
  },
  {
    id: 38,
    title: "Reorder List",
    url: "https://leetcode.com/problems/reorder-list/",
    topic: "Linked List",
    difficulty: "Medium",
  },
  {
    id: 39,
    title: "Remove Nth Node From End of List",
    url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    topic: "Linked List",
    difficulty: "Medium",
  },
  {
    id: 40,
    title: "Copy List With Random Pointer",
    url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    topic: "Linked List",
    difficulty: "Medium",
  },
  {
    id: 41,
    title: "Add Two Numbers",
    url: "https://leetcode.com/problems/add-two-numbers/",
    topic: "Linked List",
    difficulty: "Medium",
  },
  {
    id: 42,
    title: "Find the Duplicate Number",
    url: "https://leetcode.com/problems/find-the-duplicate-number/",
    topic: "Linked List",
    difficulty: "Medium",
  },
  {
    id: 43,
    title: "LRU Cache",
    url: "https://leetcode.com/problems/lru-cache/",
    topic: "Linked List",
    difficulty: "Hard",
  },
  {
    id: 44,
    title: "Merge K Sorted Lists",
    url: "https://leetcode.com/problems/merge-k-sorted-lists/",
    topic: "Linked List",
    difficulty: "Hard",
  },
  {
    id: 45,
    title: "Reverse Nodes in k-Group",
    url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    topic: "Linked List",
    difficulty: "Hard",
  },
  {
    id: 46,
    title: "Invert Binary Tree",
    url: "https://leetcode.com/problems/invert-binary-tree/",
    topic: "Tree",
    difficulty: "Easy",
  },
  {
    id: 47,
    title: "Maximum Depth of Binary Tree",
    url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    topic: "Tree",
    difficulty: "Easy",
  },
  {
    id: 48,
    title: "Diameter of Binary Tree",
    url: "https://leetcode.com/problems/diameter-of-binary-tree/",
    topic: "Tree",
    difficulty: "Easy",
  },
  {
    id: 49,
    title: "Balanced Binary Tree",
    url: "https://leetcode.com/problems/balanced-binary-tree/",
    topic: "Tree",
    difficulty: "Easy",
  },
  {
    id: 50,
    title: "Same Tree",
    url: "https://leetcode.com/problems/same-tree/",
    topic: "Tree",
    difficulty: "Easy",
  },
  {
    id: 51,
    title: "Subtree of Another Tree",
    url: "https://leetcode.com/problems/subtree-of-another-tree/",
    topic: "Tree",
    difficulty: "Easy",
  },
  {
    id: 52,
    title: "Lowest Common Ancestor of a Binary Search Tree",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    topic: "Tree",
    difficulty: "Easy",
  },
  {
    id: 53,
    title: "Binary Tree Level Order Traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    topic: "Tree",
    difficulty: "Medium",
  },
  {
    id: 54,
    title: "Binary Tree Right Side View",
    url: "https://leetcode.com/problems/binary-tree-right-side-view/",
    topic: "Tree",
    difficulty: "Medium",
  },
  {
    id: 55,
    title: "Count Good Nodes In Binary Tree",
    url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    topic: "Tree",
    difficulty: "Medium",
  },
  {
    id: 56,
    title: "Validate Binary Search Tree",
    url: "https://leetcode.com/problems/validate-binary-search-tree/",
    topic: "Tree",
    difficulty: "Medium",
  },
  {
    id: 57,
    title: "Kth Smallest Element In a BST",
    url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    topic: "Tree",
    difficulty: "Medium",
  },
  {
    id: 58,
    title: "Construct Binary Tree From Preorder And Inorder Traversal",
    url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    topic: "Tree",
    difficulty: "Medium",
  },
  {
    id: 59,
    title: "Binary Tree Maximum Path Sum",
    url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    topic: "Tree",
    difficulty: "Hard",
  },
  {
    id: 60,
    title: "Serialize And Deserialize Binary Tree",
    url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    topic: "Tree",
    difficulty: "Hard",
  },
   {
    id: 61,
    title: "Kth Largest Element In a Stream",
    url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    topic: "Heap & Priority Queue",
    difficulty: "Easy",
  },
  {
    id: 62,
    title: "Last Stone Weight",
    url: "https://leetcode.com/problems/last-stone-weight/",
    topic: "Heap & Priority Queue",
    difficulty: "Easy",
  },
  {
    id: 63,
    title: "K Closest Points to Origin",
    url: "https://leetcode.com/problems/k-closest-points-to-origin/",
    topic: "Heap & Priority Queue",
    difficulty: "Medium",
  },
  {
    id: 64,
    title: "Kth Largest Element In An Array",
    url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    topic: "Heap & Priority Queue",
    difficulty: "Medium",
  },
  {
    id: 65,
    title: "Task Scheduler",
    url: "https://leetcode.com/problems/task-scheduler/",
    topic: "Heap & Priority Queue",
    difficulty: "Medium",
  },
  {
    id: 66,
    title: "Design Twitter",
    url: "https://leetcode.com/problems/design-twitter/",
    topic: "Heap & Priority Queue",
    difficulty: "Medium",
  },
  {
    id: 67,
    title: "Find Median From Data Stream",
    url: "https://leetcode.com/problems/find-median-from-data-stream/",
    topic: "Heap & Priority Queue",
    difficulty: "Hard",
  },
  {
    id: 68,
    title: "Subsets",
    url: "https://leetcode.com/problems/subsets/",
    topic: "Backtracking",
    difficulty: "Medium",
  },
  {
    id: 69,
    title: "Combination Sum",
    url: "https://leetcode.com/problems/combination-sum/",
    topic: "Backtracking",
    difficulty: "Medium",
  },
  {
    id: 70,
    title: "Combination Sum II",
    url: "https://leetcode.com/problems/combination-sum-ii/",
    topic: "Backtracking",
    difficulty: "Medium",
  },
  {
    id: 71,
    title: "Permutations",
    url: "https://leetcode.com/problems/permutations/",
    topic: "Backtracking",
    difficulty: "Medium",
  },
  {
    id: 72,
    title: "Subsets II",
    url: "https://leetcode.com/problems/subsets-ii/",
    topic: "Backtracking",
    difficulty: "Medium",
  },
  {
    id: 73,
    title: "Word Search",
    url: "https://leetcode.com/problems/word-search/",
    topic: "Backtracking",
    difficulty: "Medium",
  },
  {
    id: 74,
    title: "Palindrome Partitioning",
    url: "https://leetcode.com/problems/palindrome-partitioning/",
    topic: "Backtracking",
    difficulty: "Medium",
  },
  {
    id: 75,
    title: "Letter Combinations of a Phone Number",
    url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    topic: "Backtracking",
    difficulty: "Medium",
  },
  {
    id: 76,
    title: "N Queens",
    url: "https://leetcode.com/problems/n-queens/",
    topic: "Backtracking",
    difficulty: "Hard",
  },
  {
    id: 77,
    title: "Implement Trie (Prefix Tree)",
    url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    topic: "Tries",
    difficulty: "Medium",
  },
  {
    id: 78,
    title: "Design Add and Search Words Data Structure",
    url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    topic: "Tries",
    difficulty: "Medium",
  },
  {
    id: 79,
    title: "Word Search II",
    url: "https://leetcode.com/problems/word-search-ii/",
    topic: "Tries",
    difficulty: "Hard",
  },
  {
    id: 80,
    title: "Number of Islands",
    url: "https://leetcode.com/problems/number-of-islands/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 81,
    title: "Max Area of Island",
    url: "https://leetcode.com/problems/max-area-of-island/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 82,
    title: "Clone Graph",
    url: "https://leetcode.com/problems/clone-graph/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 83,
    title: "Walls And Gates",
    url: "https://leetcode.com/problems/walls-and-gates/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 84,
    title: "Rotting Oranges",
    url: "https://leetcode.com/problems/rotting-oranges/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 85,
    title: "Pacific Atlantic Water Flow",
    url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 86,
    title: "Surrounded Regions",
    url: "https://leetcode.com/problems/surrounded-regions/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 87,
    title: "Course Schedule",
    url: "https://leetcode.com/problems/course-schedule/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 88,
    title: "Course Schedule II",
    url: "https://leetcode.com/problems/course-schedule-ii/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 89,
    title: "Graph Valid Tree",
    url: "https://leetcode.com/problems/graph-valid-tree/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 90,
    title: "Number of Connected Components In An Undirected Graph",
    url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 91,
    title: "Redundant Connection",
    url: "https://leetcode.com/problems/redundant-connection/",
    topic: "Graphs",
    difficulty: "Medium",
  },
  {
    id: 92,
    title: "Word Ladder",
    url: "https://leetcode.com/problems/word-ladder/",
    topic: "Graphs",
    difficulty: "Hard",
  },
  {
    id: 93,
    title: "Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray/",
    topic: "Greedy",
    difficulty: "Easy",
  },
  {
    id: 94,
    title: "Jump Game",
    url: "https://leetcode.com/problems/jump-game/",
    topic: "Greedy",
    difficulty: "Medium",
  },
  {
    id: 95,
    title: "Jump Game II",
    url: "https://leetcode.com/problems/jump-game-ii/",
    topic: "Greedy",
    difficulty: "Medium",
  },
  {
    id: 96,
    title: "Gas Station",
    url: "https://leetcode.com/problems/gas-station/",
    topic: "Greedy",
    difficulty: "Medium",
  },
  {
    id: 97,
    title: "Hand of Straights",
    url: "https://leetcode.com/problems/hand-of-straights/",
    topic: "Greedy",
    difficulty: "Medium",
  },
  {
    id: 98,
    title: "Merge Triplets to Form Target Triplet",
    url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    topic: "Greedy",
    difficulty: "Medium",
  },
  {
    id: 99,
    title: "Partition Labels",
    url: "https://leetcode.com/problems/partition-labels/",
    topic: "Greedy",
    difficulty: "Medium",
  },
  {
    id: 100,
    title: "Valid Parenthesis String",
    url: "https://leetcode.com/problems/valid-parenthesis-string/",
    topic: "Greedy",
    difficulty: "Medium",
  },
   {
    id: 101,
    title: "Insert Interval",
    url: "https://leetcode.com/problems/insert-interval/",
    topic: "Intervals",
    difficulty: "Medium",
  },
  {
    id: 102,
    title: "Merge Intervals",
    url: "https://leetcode.com/problems/merge-intervals/",
    topic: "Intervals",
    difficulty: "Medium",
  },
  {
    id: 103,
    title: "Non Overlapping Intervals",
    url: "https://leetcode.com/problems/non-overlapping-intervals/",
    topic: "Intervals",
    difficulty: "Medium",
  },
  {
    id: 104,
    title: "Meeting Rooms",
    url: "https://leetcode.com/problems/meeting-rooms/",
    topic: "Intervals",
    difficulty: "Easy",
  },
  {
    id: 105,
    title: "Meeting Rooms II",
    url: "https://leetcode.com/problems/meeting-rooms-ii/",
    topic: "Intervals",
    difficulty: "Medium",
  },
  {
    id: 106,
    title: "Minimum Interval to Include Each Query",
    url: "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
    topic: "Intervals",
    difficulty: "Hard",
  },
  {
    id: 107,
    title: "Rotate Image",
    url: "https://leetcode.com/problems/rotate-image/",
    topic: "Math & Geometry",
    difficulty: "Medium",
  },
  {
    id: 108,
    title: "Spiral Matrix",
    url: "https://leetcode.com/problems/spiral-matrix/",
    topic: "Math & Geometry",
    difficulty: "Medium",
  },
  {
    id: 109,
    title: "Set Matrix Zeroes",
    url: "https://leetcode.com/problems/set-matrix-zeroes/",
    topic: "Math & Geometry",
    difficulty: "Medium",
  },
  {
    id: 110,
    title: "Happy Number",
    url: "https://leetcode.com/problems/happy-number/",
    topic: "Math & Geometry",
    difficulty: "Easy",
  },
  {
    id: 111,
    title: "Plus One",
    url: "https://leetcode.com/problems/plus-one/",
    topic: "Math & Geometry",
    difficulty: "Easy",
  },
  {
    id: 112,
    title: "Pow(x, n)",
    url: "https://leetcode.com/problems/powx-n/",
    topic: "Math & Geometry",
    difficulty: "Medium",
  },
  {
    id: 113,
    title: "Multiply Strings",
    url: "https://leetcode.com/problems/multiply-strings/",
    topic: "Math & Geometry",
    difficulty: "Medium",
  },
  {
    id: 114,
    title: "Detect Squares",
    url: "https://leetcode.com/problems/detect-squares/",
    topic: "Math & Geometry",
    difficulty: "Medium",
  },
  {
    id: 115,
    title: "Single Number",
    url: "https://leetcode.com/problems/single-number/",
    topic: "Bit Manipulation",
    difficulty: "Easy",
  },
  {
    id: 116,
    title: "Number of 1 Bits",
    url: "https://leetcode.com/problems/number-of-1-bits/",
    topic: "Bit Manipulation",
    difficulty: "Easy",
  },
  {
    id: 117,
    title: "Counting Bits",
    url: "https://leetcode.com/problems/counting-bits/",
    topic: "Bit Manipulation",
    difficulty: "Easy",
  },
  {
    id: 118,
    title: "Reverse Bits",
    url: "https://leetcode.com/problems/reverse-bits/",
    topic: "Bit Manipulation",
    difficulty: "Easy",
  },
  {
    id: 119,
    title: "Missing Number",
    url: "https://leetcode.com/problems/missing-number/",
    topic: "Bit Manipulation",
    difficulty: "Easy",
  },
  {
    id: 120,
    title: "Sum of Two Integers",
    url: "https://leetcode.com/problems/sum-of-two-integers/",
    topic: "Bit Manipulation",
    difficulty: "Medium",
  },
  {
    id: 121,
    title: "Reverse Integer",
    url: "https://leetcode.com/problems/reverse-integer/",
    topic: "Bit Manipulation",
    difficulty: "Medium",
  },
];

// Your custom statuses
const statuses = [
  "Completely Clueless",
  "Solved After Watching Video",
  "Solved Without Aid but Struggled",
  "Solved Without Aid",
];

// Map statuses to FSRS quality (0-5 scale)
const statusToQuality = {
  "Completely Clueless": 0,
  "Solved After Watching Video": 2,
  "Solved Without Aid but Struggled": 3,
  "Solved Without Aid": 5,
};

// Baseline intervals (days) for each status
const baseIntervals = {
  "Completely Clueless": 1,
  "Solved After Watching Video": 2,
  "Solved Without Aid but Struggled": 4,
  "Solved Without Aid": 9,
};

function daysUntilNextReview(lastReviewed, interval) {
  if (!lastReviewed) return 0;
  const dueTimestamp = new Date(lastReviewed).getTime() + interval * 86400000;
  const diffMs = dueTimestamp - new Date().getTime();
  return Math.max(0, Math.ceil(diffMs / 86400000));
}

// FSRS-style update for ease and interval
function updateFSRS(prev, quality, baseInterval) {
  const MIN_EASE = 1.3;
  const MAX_EASE = 2.5;
  let ease = prev.ease ?? 2.5;
  let interval = prev.interval ?? baseInterval;

  // Update ease factor per FSRS formula
  ease = ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  ease = Math.min(MAX_EASE, Math.max(MIN_EASE, ease));

  if (quality < 3) {
    // For low quality, reset interval to base interval
    interval = baseInterval;
  } else {
    // For higher quality, multiply interval by ease factor but clamp at 90 days
    interval = Math.round(interval * ease);
    interval = Math.min(interval, 90);
  }

  return { ease, interval };
}

import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "36rem",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    marginBottom: "1rem",
    border: "1px solid #ddd",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  cardContent: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "700",
    margin: 0,
  },
  link: {
    color: "#2563eb",
    textDecoration: "underline",
  },
  topic: {
    filter: "blur(100px)",
    transition: "filter 0.3s ease",
  },

  difficulty: {
    margin: 0,
  },
  nextReviewText: {
    fontStyle: "italic",
  },
  reviewMoreInfo: {
    fontSize: "0.875rem",
    fontStyle: "italic",
    color: "#6b7280",
  },
  label: {
    display: "block",
    marginTop: "1rem",
  },
  select: {
    width: "100%",
    borderRadius: "0.375rem",
    border: "1px solid #ccc",
    padding: "0.25rem 0.75rem",
    marginTop: "0.25rem",
  },
  textarea: {
    width: "100%",
    marginTop: "0.25rem",
    padding: "0.5rem",
    borderRadius: "0.375rem",
    border: "1px solid #ccc",
    fontFamily: "inherit",
    resize: "vertical",
  },
  buttonGroup: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "1rem",
  },
  centerText: {
    textAlign: "center",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};


export default function CodeDeck() {
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("Completely Clueless");
  const [notes, setNotes] = useState("");
  const [reviewLog, setReviewLog] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [topicBlurred, setTopicBlurred] = useState(true);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
 const [visibleProblems, setVisibleProblems] = useState([]);

    useEffect(() => {
  const activeTopics = selectedTopics.length === 0
    ? []
    : selectedTopics;

  const filtered = problems.filter(p => activeTopics.includes(p.topic));

  const filteredDueProblems = showAll
    ? filtered
    : filtered.filter((p) => {
        const log = reviewLog[p.id];
        if (!log) return true; // Unseen problems are due
        const dueDate = new Date(new Date(log.lastReviewed).getTime() + (log.interval || 1) * 86400000);
        const today = new Date();
        return today >= dueDate;
      });

  setVisibleProblems(filteredDueProblems);
}, [selectedTopics, showAll, reviewLog]);

  useEffect(() => {
    const saved = localStorage.getItem("reviewLog");
    if (saved) {
      setReviewLog(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(reviewLog).length > 0) {
      localStorage.setItem("reviewLog", JSON.stringify(reviewLog));
    }
  }, [reviewLog]);
  const allTopics = Array.from(new Set(problems.map(p => p.topic))).sort();
  // Filter problems due today if showAll is false
//   const visibleProblems = showAll
//     ? problems
//     : problems.filter((p) => {
//         const log = reviewLog[p.id];
//         console.log(selectedTopics)
//         console.log(p.topic)
//         if (p.topic in selectedTopics == false) return false;
//         if (!log) return true; // Unseen problems are due
//         const dueDate = new Date(new Date(log.lastReviewed).getTime() + (log.interval || 1) * 86400000);
//         const today = new Date();
//         return today >= dueDate;
//       });

  const problem = visibleProblems.length > 0 ? visibleProblems[current % visibleProblems.length] : null;

  function getDaysToNextReviewForProblem(p) {
    const log = reviewLog[p.id];
    if (!log) return 0;
    return daysUntilNextReview(log.lastReviewed, log.interval || 1);
  }

  const handleSave = () => {
    if (!problem) return;

    const prev = reviewLog[problem.id] || { ease: 2.5, interval: 1 };
    const quality = statusToQuality[status] ?? 0;
    const baseInterval = baseIntervals[status] ?? 1;

    const { ease, interval } = updateFSRS(prev, quality, baseInterval);

    setReviewLog((prevLog) => ({
      ...prevLog,
      [problem.id]: {
        status,
        notes,
        ease,
        interval,
        lastReviewed: new Date().toISOString().split("T")[0],
      },
    }));
  };

  const handleNext = () => {
    if (!problem) return;

    handleSave();

    const nextIndex = (current + 1) % visibleProblems.length;
    setCurrent(nextIndex);

    const nextProblem = visibleProblems[nextIndex];
    setStatus(reviewLog[nextProblem?.id]?.status || "Completely Clueless");
    setNotes(reviewLog[nextProblem?.id]?.notes || "");
  };

  const handleReviewMore = () => {
    setShowAll(true);
    setCurrent(0);
    if (problems.length > 0) {
      setStatus(reviewLog[problems[0].id]?.status || "Completely Clueless");
      setNotes(reviewLog[problems[0].id]?.notes || "");
    }
  };

  const nextProblemIndex = problem ? (current + 1) % visibleProblems.length : 0;
  const nextProblem = visibleProblems.length > 0 ? visibleProblems[nextProblemIndex] : null;
  const nextDays = nextProblem ? getDaysToNextReviewForProblem(nextProblem) : 0;

  const currentDays = problem ? getDaysToNextReviewForProblem(problem) : 0;

  return (
    <div style={styles.container}>
        {allTopics.map(topic => (
  <label key={topic}>
    <input
      type="checkbox"
      checked={selectedTopics.includes(topic)}
      onChange={() => {
        if (selectedTopics.includes(topic)) {
          setSelectedTopics(selectedTopics.filter(t => t !== topic));
        } else {
          setSelectedTopics([...selectedTopics, topic]);
        }
      }}
    />
    {topic}
  </label>
))}
      {problem ? (
        <>
          <Card>
            
            <CardContent >
              <h2 style={styles.title}>{problem.title}</h2>
              <p>
                <a
                  href={problem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  View on LeetCode
                </a>
              </p>
              <p
                
      
              >
                <button
  onClick={() => setTopicBlurred((prev) => !prev)}
  style={{
    marginBottom: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    border: "1px solid #ccc",
    cursor: "pointer",
  }}
>
  {topicBlurred ? "Show Topic Clearly" : "Blur Topic"}
</button>
<br/><strong>Topic:</strong> <span style={topicBlurred ? styles.topic : { ...styles.topic, filter: "none" }}>{problem.topic}</span>
              </p>
              <p style={styles.difficulty}>
                <strong>Difficulty:</strong> {problem.difficulty}
              </p>
              <p style={styles.nextReviewText}>
                {currentDays === 0
                  ? "Due today"
                  : `Next review in ${currentDays} day${currentDays > 1 ? "s" : ""}`}
              </p>
              {showAll && (
                <p style={styles.reviewMoreInfo}>
                  Reviewing all problems (ignoring due dates)
                </p>
              )}
            </CardContent>
          </Card>

          <div>
            <label style={styles.label}>
              Status:
              <select
                style={styles.select}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {statuses.map((s) => {
                  // Show days pushed before next review inside option
                  const days = baseIntervals[s] ?? 0;
                  return (
                    <option key={s} value={s}>
                      {s} {days > 0 ? `(${days}d)` : ""}
                    </option>
                  );
                })}
              </select>
            </label>

            <label style={styles.label}>
              Notes:
              <Textarea
                style={styles.textarea}
                rows={5}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>

            <div style={styles.buttonGroup}>
              <Button onClick={handleNext}>Next Problem</Button>
              {!showAll && (
                <Button onClick={handleReviewMore} variant="secondary">
                  Review More
                </Button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div style={styles.centerText}>
          <p>No problems to review today 🎉</p>
          <Button onClick={handleReviewMore} variant="secondary">
            Review More
          </Button>
        </div>
      )}
    </div>
  );
}
