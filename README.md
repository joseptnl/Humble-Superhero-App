<p align="center">
  <img src="https://github.com/joseptnl/Humble-Superhero-App/blob/master/humble-superhero.webp" width="200" alt="App logo" />
</p>

  <p align="center">App to rank superheroes by their humility.</p>

## Description

Monorepo that has both the `api` and the `web-client` of the **Humble Superhero App**.

The **Humble Superhero App** allows the users to create Superheroes adding a name, a superpower and a humility score for each of them. Then, all the created superheroes can be listed to find out which is the most or least humble.

To check how to run app see `api` and `web-client` projects readme.

## Team

If I had to collaborate with at least one other developer, I would split the application into different features (e.g., the GET endpoint or a new endpoint for deletion). Each feature would become a task or a set of tasks. Then, I would add these tasks to a Kanban board using tools like Jira or Azure DevOps. Finally, each of us would pick up one task at a time. Task assignment would be done dynamically, based on the required skills and priority.

Another agile methodology that, in my opinion, could be a great addition with an extensive development roadmap is Scrum. What I find most interesting about this methodology is the retrospective meetings held after each sprint. As a result, we could improve collaboration.

Lastly, we would also need to establish a Git workflow. Since we would be a two-member team working with Kanban, a simple and effective way to manage Git branches would be by using a feature branch workflow. Each feature would be developed in its own branch, which would be merged into master once completed.

## If I had more time

As the title says, "If I had more time...", I would expand the list of features by creating a full CRUD for superheroes. Instead of just adding them, I would also implement update and delete functionalities. Additionally, it could be interesting to check for already existing superheroes by name and prevent duplicates. This would require expanding the logic of the create endpoints to include extra validation.

Other interesting features I came up with include:

1. Creating a custom filter to search by name or superpower. This would involve adding parameters to the /get endpoint and using them to filter at the repository layer.
2. Implementing a Superpower entity that can be assigned to multiple superheroes. To achieve this, we would need to create a new Superpower model and establish a one-to-many (1..n) relationship with Superhero.
3. Building a dashboard to display the average humility for each superpower.
4. Implementing additional features, such as login/logout with tokens (potentially use login with third-party providers), user networking, real-time visibility of superheroes created by other users, etc.

Finally, from an infrastructure perspective, I would like to experiment with databases such as MySQL or MongoDB (diving deeper into NoSQL, especially for real-time functionalities), use the cloud to host the application, and, if scalability demands it, explore microservices, edge computing, messaging queues, etc.

## Stay in touch

- Linkedin - [Josep Naranjo](https://www.linkedin.com/in/josep-naranjo/)
- Gmail - josepnaranjocontact@gmail.com
