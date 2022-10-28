import React from 'react'
import IssueDetails from './IssueDetails'
import { PrismaClient } from '@prisma/client'

export default async function page({params}) {
 
    const prisma = new PrismaClient()
    const getData = await prisma.issue.findFirst(
        {
            where:{id:+params.urlselect}
        }
    )

    return <IssueDetails issue={getData}/>
}
