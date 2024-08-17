/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiResponse {
    /** @format int32 */
    code?: number
    type?: string
    message?: string
  }

  export interface User {
    /** @format int64 */
    id?: number
    name?: string
    avatar?: string
    email?: string
    title?: string
    department?: string
    role?: string
    status?: string
  }

  export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    cover: string;
    publicationDate: string; // or Date
    isFavorite?: boolean 
  }
  
  export type Books = Book[];