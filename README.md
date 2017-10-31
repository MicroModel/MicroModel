# MicroRender
The smallest stateful self rendering class I could think of. 17 lines of code means state changes cause render!

# WARNING
Right now it's currently insecure in that things other than the instance can modify the instance. We might not like that because it could lead to XSS vulnerabilities. Will probably make a small extension class that will be secure based on this.

Still for 17 lines of code it's a pretty impressive proof of concept in what can be done with vanilla JS.