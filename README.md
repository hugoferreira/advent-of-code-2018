# advent-of-code-2018

Solutions to [Advent of Code 2018](https://adventofcode.com) programming contest, using Functional(ish) Javascript.

## Why Functional

Because I like it. Because I think very easily in terms of combinators. Because, why not?

## Why Javascript

Because I hate it. I mean, EcmaScript is becoming decent. Typescript is becoming very decent. But there are terrible inconsistencies in the Javascript common libraries. Consider this:

```
> '#2 3,4: 5x6'.match(/\d+/g)
[ '2', '3', '4', '5', '6' ]
```

... so ...

```
> '#2 3,4: 5x6'.match(/\d+/g).map(parseInt)
[ 2, NaN, NaN, NaN, NaN ]
```

What?... I mean, WTF? It's *infuriating*! And the solution is a real gem:

```
> '#2 3,4: 5x6'.match(/\d+/g).map(x => +x)
[ 2, 3, 4, 5, 6 ]
```

## Why both?

~Once you start writing JS in a functional way, it's almost (!) bearable~ It's a good way to force you to learn it.

## Your solutions are not (always) pure

Yeah, well... JS kind of makes it a huge hassle sometimes, and I have limited time to do this.

## Why not other languages?

Like Haskell and Scala? Been there, done that.
