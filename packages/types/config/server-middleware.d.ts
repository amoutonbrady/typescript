/**
 * NuxtConfigurationServerMiddleware
 * Documentation: https://nuxtjs.org/api/configuration-servermiddleware
 */

import { NextHandleFunction } from 'connect'

export type ServerMiddleware = NextHandleFunction

export type NuxtConfigurationServerMiddleware = string | { path: string, prefix?: boolean, handler: string | ServerMiddleware } | ServerMiddleware
