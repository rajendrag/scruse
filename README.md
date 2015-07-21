scruse (Remote Script Runner Server)
=============================
**Note: This project is still under early development stage**

**scruse provides an easy way integrate scripts (R, Python and others) into any application**
* Create projects and upload scripts into project
* Configure multiple script running servers 
* Automatic copying to all available script running servers
* Easier RestAPI to execute scripts
* JSON is the preferred way of exchanging information between script and application 


Getting Started
----------

Your development environment will require:
*  Play framework [using activator](https://www.playframework.com/documentation/2.3.x/Installing)
*  MongoDB

Once the prerequisites have been installed, you will be able to execute the following from a terminal.

```
../scruse$ activator run
  [info] Loading project definition from /home/rp/git/scruse/project
  [info] Set current project to scruse (in build file:/home/rp/git/scruse/)
  [info] Updating {file:/home/rp/git/scruse/}root...
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

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/rajendrag/scruse/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

