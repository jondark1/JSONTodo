import React from 'react'

const AddTodo = () => {
  return (
    <div>
          <div>
            <Card className="w-[750px]">
              <CardHeader>
                <CardTitle>{todo.title}</CardTitle>
                <CardDescription>{todo.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center py-10">
                <p>{todo.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1></h1>
              </CardFooter>
            </Card>
          </div>
        </div>
  )
}
