const _ = require('lodash/fp')

export const id = _.identity
export const trim = _.trim
export const map  = _.map
export const reject = _.reject
export const flatten = _.flatten
export const uniq = _.uniq
export const filter = _.filter
export const sortBy = _.sortBy
export const keys = _.map(k => k[0])
export const values = _.map(k => k[1])
export const first = _.first
export const fst = _.first
export const snd = _.pipe(_.drop(1), _.first)
export const eq = _.eq
export const pipe = _.pipe
export const take = _.take
export const drop = _.drop
export const concat = _.concat
export const partition = _.partition
export const contains = _.contains
export const isEmpty = _.pipe(_.size, _.eq(0))
export const isNotEmpty = _.pipe(_.size, _.lt(0))

export const swap = (f) => (a, b, ...r) => f(b, a, ...r)

export const sortKey = _.sortBy(k => k[0])
export const sortValue = _.sortBy(k => k[1])

export const sortByKey = (f) => _.sortBy(k => f(k[0]))
export const sortByValue = (f) => _.sortBy(k => f(k[1]))

export const mapValues = (f) => _.map(k => [k[0], f(k[1])])
export const mapKeys = (f) => _.map(k => [f(k[0]), k[1]])
export const bimap = (g) => (f) => _.map(k => [g(k[0]), f(k[1])])

export const filterKeys = (f) => _.filter(k => f(k[0]))
export const filterValues = (f) => _.filter(k => f(k[1]))

export const rejectKeys = (f) => _.reject(k => f(k[0]))
export const rejectValues = (f) => _.reject(k => f(k[1]))