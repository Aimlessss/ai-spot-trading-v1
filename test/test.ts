// You're writing the UI for a to-do list application that supports real-time
// editing of tasks. Here's what the schema for the app looks like:

type Project = {
  projectId: string;
  tasks: Task[];

  // Don't worry about project titles etc. for simplicity's sake.
};

type Task = {
  taskId: string;
  projectId: string;
  index: number;

  title: string;
  completedDate: Date | null;
};

// Unfortunately, someone forgot to implement an API that lets you fetch all the
// task details, which is a problem for application startup. For now, all the
// API can do is return a log of events. You might see events like these:

type TaskEvent =
  | TaskUpdatedEvent
  | TaskCompletedEvent
  | TaskMovedEvent
  | TaskDeletedEvent;

type TaskUpdatedEvent = {
  event: "updated";
  taskId: string;
  title: string;
};

type TaskCompletedEvent = {
  event: "completed";
  taskId: string;
  completedDate: Date | null;
};

type TaskMovedEvent = {
  event: "moved";
  taskId: string;
  newProjectId: string;
  newIndex: number;
};

type TaskDeletedEvent = {
  event: "deleted";
  taskId: string;
};

// For this exercise, you're writing the event handler that processes events
// from the back-end and builds the set of projects to show in the UI. The goal
// is to build up as complete a picture of the projects and tasks as possible,
// given the events that have been received.

const projects = new Map<string, Project>();
const tasks = new Map<string, Task>();

function handleEvent(event: TaskEvent) {
  // YOUR CODE HERE
  const {event : type, taskId} = event;
  if(!(tasks.has(taskId))){
    tasks.set(taskId, {
      projectId : '1',
      taskId : event.taskId,
      title : '',
      index : 1,
      completedDate  : new Date()
    })
  }

  const task = tasks.get(taskId);
  switch(event.event){
    case 'completed':
      task!.completedDate = new Date();
      break;
    case 'deleted' : 
      for( const x of projects.values()){
        x.tasks = x.tasks.filter((t) => t.projectId !== t.taskId);
      }
      tasks.delete(taskId);
    break;
    case 'moved' : 
      const { newProjectId, newIndex } = event;
      
      if(!(projects.has(newProjectId))){
        projects.set(newProjectId, {
          projectId : newProjectId,
          tasks : []
        })
      }

      const project = projects.get(newProjectId);
      for( const x of projects.values()){
        x.tasks = x.tasks.filter((t) => t.projectId !== t.taskId);
      }
      project?.tasks.splice(newIndex, 0, task!);
      task!.projectId = event.newProjectId

    break;
    case 'updated':
        task!.title = event.title
    break;
  }

}

const events: TaskEvent[] = [
  { event: "moved", taskId: "done", newProjectId: "p1", newIndex: 0 },
  { event: "updated", taskId: "done", title: "Done" },
  { event: "completed", taskId: "done", completedDate: new Date() },
  { event: "moved", taskId: "replaced", newProjectId: "p2", newIndex: 0 },
  { event: "updated", taskId: "replaced", title: "Replaced - Old Title" },
  { event: "updated", taskId: "replaced", title: "Replaced - New Title" },
  { event: "updated", taskId: "not-done", title: "Not Done" },
  { event: "moved", taskId: "not-done", newProjectId: "p2", newIndex: 0 },  

  // Feel free to add your own events or even new test cases.
];

for (const event of events) {
  handleEvent(event);
}

console.log(JSON.stringify(Array.from(projects.values()), undefined, 4));

