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
*  SBT / Play see [here]() for installation instructions.
*  MongoDB see [here]() for installation instructions.

Once the prerequisites have been installed, you will be able to execute the following from a terminal.

```
../restR >  activator run
```

This should fetch all the dependencies and start a Web Server listening on *localhost:9000*

Note: This will create a MongoDB Collection for you automatically, a freebie from the Driver!