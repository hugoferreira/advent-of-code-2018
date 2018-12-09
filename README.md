# Advent of Code 2018

Solutions to [Advent of Code 2018](https://adventofcode.com) programming contest, using Functional(ish) Javascript.

## Why Functional

Because I like it. Because I think very easily in terms of combinators. Because, why not?

## Why Javascript

Because I hate it. I mean, EcmaScript is becoming decent. Typescript is becoming very decent. But there are terrible inconsistencies in the Javascript common libraries and language semantics. Consider this:

```
> '#2 3,4: 5x6'.match(/\d+/g)
[ '2', '3', '4', '5', '6' ]
```

... so ...

```
> '#2 3,4: 5x6'.match(/\d+/g).map(parseInt)
[ 2, NaN, NaN, NaN, NaN ]
```

What?... I mean, WTF? It's *infuriating*! And the *typical* solution is a real gem:

```
> '#2 3,4: 5x6'.match(/\d+/g).map(x => +x)
[ 2, 3, 4, 5, 6 ]
```

## You know that happens because...

Yes, yes. `parseInt` accepts two arguments. And `.reduce` expects a function with up to three arguments. It doesn't matter. It's unintuitive, it's too permissive, and it leads to an high rate of *wtf/s*.

## Why both?

~Once you start writing JS in a functional way, it's almost bearable.~ It's a good way to force you to learn it.

## Your solutions are not (always) pure

Yeah, well... JS kind of makes it a huge hassle sometimes, and I have limited time to do this.

## Why not other languages?

Like Haskell and Scala? Been there, done that.

## Why did you stop publishing your solutions after day 5?

In the spirit of a little competition, I don't think we should publish them before the contest ends. First five days were free... the rest you'll have to wait :)

## So you are competing...

More or less. The timezone is absurdly annoying (5AM GMT? Really?), and I would prefer to solve them in the end of the day; so I am competing just for the stars. Still, I am registered in [this private leaderboard](https://adventofcode.com/2018/leaderboard/private/view/240997).
