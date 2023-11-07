# Shift #

# Description #
The team members collaborating on this project are Austin Pace,
Axell Martinez, Bailey Dalton, William Cessor, and Michael Boynton.
We are creating a mobile application to track employee attendance and will
include other features such as ability to set own schedule, see your 
paycheck in advance and a user profile to keep track of employees.
This application is meant for small buisness owners as a way 
to track hours worked of employees. We are creating this application
to improve effieceny and accuarcy of companies.

# General Info #

![Scheme](readme_images/shiftlogo.png)

# Technologies #
![Scheme](readme_images/awsExplained.png)
![Scheme](readme_images/jwtexplained.png)
![Scheme](readme_images/databasescheme.png)
1. Aws route53,
2. Aws ec2,
3. nginx,
4. React,
5. CSS,
6. JavaScript,
7. Firebase,
8. Ruby on rails,
9. Mysql and SQlite
10. JWT

# Features #
*User profile: This feature will be the first implementation to our app. 
It will be intended for both employees and employers as a way to store
personal information stored by the company

# Contributions #
* Axell "worked on setting up technologies and connecting backend to frontend"
  * Sprint 1
    * created api calls from rails to react         
      * reference-https://cs3398f23vulcans.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-32
    * created user auth using jwt
      * reference-https://cs3398f23vulcans.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-57
  * Sprint 2
    * Refactored code base, focused on creating employee and company classes where instances can interact with backend api with method such as employee.addToCompany
      * reference-https://bitbucket.org/cs3398f23vulcans/%7B015458a2-8e6c-47ed-83e7-54ca69705a83%7D/pull-requests/60
    * Added submenu to employee tast that contains several actions such as delete, make admin and delete
      * reference-https://bitbucket.org/cs3398f23vulcans/%7B015458a2-8e6c-47ed-83e7-54ca69705a83%7D/pull-requests/61
* Austin "Worked mostly on frontend visuals and research about the technologies being used"
    * Created skeleton react app with basic funstion that we have been building off of
        * Referance URL - https://cs3398f23vulcans.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-34
        "ABOVE IS MISLABELED ON GIT KRACKEN AND JUST SAYS SKELETON UI WITH MY NET ID"
    * Conducted research on multiple technologies
        * Reference URL-https://cs3398f23vulcans.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-42
        * Reference URL-https://cs3398f23vulcans.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-29

# Next Steps #

* Axell
  * Sprint 1
    * Create mobile view and add task to employees
  * Sprint 2
    * deploy on aws possibly using CD/CI
* Austin
  * work on mobile view Clock in and out function