const _ = require('lodash/fp');

export const id = _.identity
export const trim = _.trim
export const map  = _.map
export const reject = _.reject
export const flatten = _.flatten
export const uniq = _.uniq
export const filter = _.filter
export const sortBy = _.sortBy
export const firsts = _.map(_.first)
export const lasts = _.map(_.last)
export const keys = firsts
export const values = lasts
export const first = _.first
export const fst = _.first
export const last = _.last
export const snd = _.pipe(_.drop(1), _.first)
export const eq = _.eq
export const pipe = _.pipe
export const take = _.take
export const drop = _.drop
export const concat = _.concat
export const cons = (xs) => (ys) => _.concat(xs, ys)

export const partition = _.partition
export const isEmpty = _.pipe(_.size, _.eq(0))
export const isNotEmpty = _.pipe(_.size, _.lt(0))
export const includes = _.includes
export const includesFrom = _.includesFrom
export const chunk = _.chunk
export const min = _.min
export const max = _.max
export const minBy = _.minBy
export const maxBy = _.maxBy
export const range = _.range
export const sum = _.sum
export const countBy = _.countBy
export const toString = _.toString
export const groupBy = _.groupBy
export const group = _.groupBy(_.identity)
export const toPairs = _.toPairs
export const size = _.size
export const indexOf = _.indexOf
export const flatMap = _.flatMap
export const zip = _.zip
export const contains = _.contains
export const histogram = _.pipe(group, _.map(_.size))
export const nth = _.nth
export const takeAt = (i, width) => _.slice(i, i + width)
export const reduce = _.reduce

export const tupleId = (p) => p[0] === p[1]
export const swap = (f) => (a, b, ...r) => f(b, a, ...r)

export const sortKey = _.sortBy(_.first)
export const sortValue = _.sortBy(_.last)

export const sortByKey = (f) => _.sortBy(k => f(k[0]))
export const sortByValue = (f) => _.sortBy(k => f(k[1]))

export const mapValue = (f) => (k) => [k[0], f(k[1])]
export const mapValues = (f) => _.map(k => [k[0], f(k[1])])
export const mapKey = (f) => (k) => [f(k[0]), k[1]]
export const mapKeys = (f) => _.map(k => [f(k[0]), k[1]])
export const bimap = (g) => (f) => _.map(k => [g(k[0]), f(k[1])])

export const filterKeys = (f) => _.filter(k => f(k[0]))
export const filterValues = (f) => _.filter(k => f(k[1]))

export const rejectKeys = (f) => _.reject(k => f(k[0]))
export const rejectValues = (f) => _.reject(k => f(k[1]))

export const toArray = _.toArray
export const toIntArray = _.map(x => parseInt(x, 10))
