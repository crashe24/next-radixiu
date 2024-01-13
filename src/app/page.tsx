import { Badge, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes"


const tasks= [
  {id:1, title: 'Task 1', description: 'This is task 1', priority: 'high',   author: 'Jhon Doe', createdAt: new Date()},
  {id:2, title: 'Task 2', description: 'This is task 2', priority: 'medium', author: 'Jhon Doe', createdAt: new Date()},
  {id:3, title: 'Task 3', description: 'This is task 3', priority: 'low',    author: 'Jhon Doe', createdAt: new Date()},
  {id:4, title: 'Task 4', description: 'This is task 4', priority: 'high',   author: 'Jhon Doe', createdAt: new Date()},
  {id:5, title: 'Task 5', description: 'This is task 5', priority: 'high',   author: 'Jhon Doe', createdAt: new Date()},
  {id:6, title: 'Task 6', description: 'This is task 6', priority: 'medium', author: 'Jhon Doe', createdAt: new Date()},
  {id:7, title: 'Task 7', description: 'This is task 7', priority: 'low',    author: 'Jhon Doe', createdAt: new Date()},
]


export default function Home() {

  const formatedDate = (dateCurrently:Date) => dateCurrently.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Grid columns={'3'} gap={'4'}>
        { tasks.map( task => (
          <Card variant="classic" key={task.id}>
            <Heading size={'2'}>{task.title}</Heading>
            <Flex justify={'between'} my={'2'}>
              <Badge
                color={
                task.priority==='high'?'red': 
                task.priority==='medium'?'ambar': 'green'
              }
              >{task.priority}</Badge>
              <Text size={'1'}>{task.author} el {formatedDate(task.createdAt)}</Text>
            </Flex>
            <Text>{task.description}</Text>
            <Button size={"3"}> see</Button>
          </Card>

        ))}


      </Grid>
      <Heading size={'6'}>Hello World!!!</Heading>
      <Text> This is Radix UI</Text>
      <Button>Teste</Button>      
    </main>
  )
}
