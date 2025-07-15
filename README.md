# saran.v
next auth installation 
next ayth secret

[...nextauth] for dymanic route
insert get post routes
if you want need middleware other wises skip it

next go authendication  page > Oauth
select which login you need to depends on your project

i choose git hub >
 move connections > providers > git hub > select to cretae new hithub login
 follow that steps 
 goto github > settings > developer setting > github apps > new github app
 Oauth apps > Oauth apps
 Register a new auth app > fill the form 
 get url form oauth from like this: "https://localhost:3000/api/auth/callback/github"
 
 genarated after to copy client id >goto env.local
 Create atu_github_id >paste like this Ov23liA4ot7k8WwqibDF
 move on github app >  genarate a new client secret
 confirm access > copy secret acess key > goto env.local

 (eg);- AUTH_GITHUB_SECRET="8b498f6a5b5354c2378cf770d532f65b22519bf6"
 