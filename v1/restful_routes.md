restful routes

name   url      verb    description

index  /dog     get    display list of all dogs
new   /dog/new  get   form to create a new dog
create /dog     post   adds newly created dog to db
show   /dog/:id  get   shows info abt one particular dog
edit /dog/edit/:it get show edit form 
update /dog/:id  put  update and redirect to that particular dog page
destroy /dog/delete/:id delete deletes that id dog