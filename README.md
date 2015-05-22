restR
===========
**This project is still under early development stage**
**restR provides an easy way integrate R scripts into any application**
* Create projects and upload R scripts into project
* Automatic copying to all available R servers
* Easier RestAPI to execute R scripts
* JSON is the preferred way of exchanging information between R and application 


Getting Started
----------

Your development environment will require:
*  Play framework [using activator](https://www.playframework.com/documentation/2.3.x/Installing)
*  MongoDB

Once the prerequisites have been installed, you will be able to execute the following from a terminal.

```
../restR$ activator run
  [info] Loading project definition from /home/rp/git/restR/project
  [info] Set current project to restR (in build file:/home/rp/git/restR/)
  [info] Updating {file:/home/rp/git/restR/}root...
  [info] Resolving jline#jline;2.12 ...
  [info] Done updating.
  
  --- (Running the application, auto-reloading is enabled) ---
  
  [info] play - Listening for HTTP on /0:0:0:0:0:0:0:0:9000
  
  (Server started, use Ctrl+D to stop and go back to the console...)

```

This should fetch all the dependencies and start a Web Server listening on *localhost:9000*

Note: This will create a MongoDB Collection for you automatically, a freebie from the Driver!

**To Debug**
```activator -jvm-debug 9999```