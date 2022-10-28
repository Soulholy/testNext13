import { PrismaClient } from '@prisma/client';

import List from './issueList'
import classes from  './layout.module.css'

async function IssuesLayout({children}) {

  const prisma = new PrismaClient()

  const getData = await prisma.issue.findMany()

  return (
    <div className={classes.layout}>
        <aside className={classes.sidebar}>
           <List issues={getData}/>
        </aside>
        {children}
    </div>
    
  )
}

export default  IssuesLayout

