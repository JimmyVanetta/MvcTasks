# MvcTasks
Simple CRUD app for keeping track of daily tasks.

This branch contains code that builds the list of tasks using an API call to build a one page hybrid card/list view. I also integrated the delete button to delete using API call without a browser redirect to another view.



Steps for getting set up:

1.) Open solution (.sln) file in visual studio 2019. (I just used free version)

2.) Navigate to the toolbar at top of window and go to the following option: Tools > NuGet Package Manager > NuGet Package Manager Console.

3.) A console should pop up at the bottom of the window that looks like this: 

    Package Manager Console Host Version 5.9.0.7134

    Type 'get-help NuGet' to see all available NuGet commands.

    PM>
    
4.) Type Update-Database and hit enter.

5.) Entity framework should initiate, create and populate a database automatically.

6.) You can now use F5 or ctrl+F5 to run the code.
