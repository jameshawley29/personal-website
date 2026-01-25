---
layout: ../../layouts/BlogPost.astro
title: 'Why I Chose Rust for My Latest Project'
description: 'After years of Python and JavaScript, I decided to learn Rust. Here is why systems programming finally clicked for me.'
pubDate: 2026-01-20
author: 'James Hawley'
category: 'tech'
---

For most of my programming journey, I've lived comfortably in the world of high-level languages. Python for data analysis and quick scripts, JavaScript and TypeScript for web development. These languages are productive, well-documented, and have massive ecosystems. So why would I voluntarily subject myself to the learning curve of Rust?

## The Trigger

It started with a side project last semester. I was building a CLI tool to process large CSV files for an economics research project. My Python script worked fine for files under 100MB, but when I tried processing a 2GB dataset, my laptop ground to a halt. Memory usage spiked, the script crawled, and I found myself waiting minutes for what should have been seconds.

I could have optimized the Python code, used generators more effectively, or reached for pandas with chunking. But I kept thinking: there has to be a better way.

## Why Not C or C++?

The obvious answer for performance-critical code is C or C++. Millions of developers have used these languages to build everything from operating systems to game engines. But every time I tried to learn C++, I hit the same wall: memory management felt like walking through a minefield.

Dangling pointers, buffer overflows, use-after-free bugs—these aren't just theoretical concerns. They're the source of the majority of security vulnerabilities in systems software. I wanted performance, but I also wanted to sleep at night.

## Enter Rust

Rust promises something that sounds too good to be true: the performance of C/C++ with memory safety guaranteed at compile time. No garbage collector, no runtime overhead, but also no segfaults.

The secret is the ownership system. Every value in Rust has exactly one owner, and when that owner goes out of scope, the value is automatically dropped. References must follow strict borrowing rules: you can have either one mutable reference or any number of immutable references, but not both.

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is "moved" to s2

    // println!("{}", s1); // This would be a compile error!
    println!("{}", s2); // This works fine
}
```

At first, the borrow checker felt like an annoying teacher constantly correcting my code. But after a few weeks, something shifted. I started thinking about ownership and lifetimes *before* I wrote the code. The compiler wasn't fighting me; it was teaching me to write better programs.

## The Results

I rewrote my CSV processing tool in Rust. The 2GB file that took minutes in Python? Rust processed it in under 10 seconds. Memory usage stayed flat because I was processing the file in a streaming fashion, and Rust made it easy to reason about when data was being allocated and freed.

But the performance wasn't even the best part. The best part was the confidence. When my Rust code compiled, it *worked*. No mysterious runtime crashes, no debugging memory leaks. The compiler had already caught those bugs.

## What I'm Still Learning

Rust isn't perfect, and the learning curve is real. Async programming in Rust is still confusing to me—the ecosystem is fragmented between different runtimes, and the syntax can be verbose. Lifetimes annotations, while powerful, sometimes require multiple attempts to get right.

I'm also still building intuition for when Rust is the right choice. For quick scripts and prototypes, Python is still faster to write. For web APIs where I need to ship quickly, TypeScript with Node.js or a framework like Next.js is probably more practical.

But for CLI tools, performance-critical libraries, and anything where correctness matters more than development speed, Rust has become my go-to. It's changed how I think about programming, and I suspect those lessons will make me better in every language I use.

## Resources

If you're curious about Rust, here's where I'd start:

- **The Rust Book**: The official guide is genuinely excellent
- **Rustlings**: Small exercises to get comfortable with the syntax
- **"Programming Rust" by Blandy & Orendorff**: More depth once you know the basics

The learning curve is steep, but the view from the top is worth it.
