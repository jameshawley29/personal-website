---
layout: ../../layouts/BlogPost.astro
title: 'Why I Finally Switched to Rust (And Why It Took So Long)'
description: 'A journey from skepticism to genuine appreciation for Rust, and what I learned about learning along the way.'
pubDate: 2024-11-03
author: 'James Hawley'
---

I've been putting off learning Rust for three years. Every few months, I'd see another blog post about how Rust would make me a better programmer, how the borrow checker was actually a gift, how memory safety without garbage collection was the future. I'd nod along, maybe skim through the first chapter of The Book, then go back to writing Python like everyone else.

What finally changed wasn't a blog post or a conference talk. It was a 3 AM debugging session during my internship last summer, tracking down a use-after-free bug in a C++ codebase that had been "working fine" for months. The bug only manifested under specific concurrency conditions, and finding it required three senior engineers and a week of printf debugging. That's when it clicked: the Rust evangelists weren't being dramatic. They were being practical.

## The Learning Curve Is Real (But Misunderstood)

Let me be honest—Rust is hard. But it's hard in a specific way that I think people miscommunicate. The syntax isn't particularly difficult. Pattern matching feels natural if you've used any functional language. The standard library is well-designed.

What's hard is that Rust forces you to think about things you've been ignoring your entire programming career. When you write Python, you're essentially trusting the runtime to figure out ownership and lifetimes for you. When you write C, you're trusting yourself (and inevitably failing). Rust makes these concerns explicit, which means you can't pretend they don't exist.

The borrow checker isn't your enemy—it's more like that professor who refuses to give partial credit. Frustrating in the moment, but ultimately making you actually understand the material.

## What Actually Helped Me Learn

A few things made the difference:

**Writing small CLI tools first.** Not web servers, not async code, not anything with complex lifetimes. Just simple tools that process files and output results. This let me focus on the basics without drowning in complexity.

**Reading other people's code.** The Rust community has a culture of well-documented, idiomatic code. I spent hours reading through `ripgrep` and smaller crates on crates.io. Seeing how experienced Rustaceans structure their programs taught me more than any tutorial.

**Accepting that fighting the compiler is part of the process.** My first few programs involved dozens of compiler errors before anything ran. I used to see this as failure. Now I see it as the compiler teaching me what I didn't understand.

## The Payoff

Here's what surprised me most: Rust has made me better at other languages. I think more carefully about ownership in Python now. I'm more deliberate about mutability in JavaScript. The concepts Rust forced me to internalize apply everywhere.

I'm not saying everyone should drop everything and learn Rust. But if you've been curious and intimidated like I was, just start. Write something small. Let the compiler yell at you. It gets easier, and more importantly, it gets rewarding.

My current side project—a simple static site analyzer—is the first program I've written where I genuinely don't worry about memory bugs. That peace of mind is worth every hour I spent arguing with the borrow checker.
