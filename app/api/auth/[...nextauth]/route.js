import nextAuth from 'next-auth'
import React from 'react'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth/next'

const authOptions = {

    providers: [
        GoogleProvider(
            {
                clientId: '',
                clientSecret: ''
            }
        )
    ]

}



const handler = NextAuth(authOptions)

export {handler as GET,
handler as POST}