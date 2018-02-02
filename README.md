# TechNotes
Tech notes for sharing


# SSO Using SAML
Ref: https://stormpath.com/blog/getting-started-with-saml-in-dot-net
* Might be a good idea to use commercial then to use open source as can be very complex to develop/ configure which may waste lots of developer cycle.
* Commercial products
  * https://www.componentspace.com/ $499
  * https://www.componentpro.com/products/saml $299
  
* Shibboleth is a mature open source SAML Service Provider  
  
 ## About SAML
Ref: https://stormpath.com/blog/getting-started-with-saml-in-dot-net
What is SAML?
* SAML (Security Assertion Markup Language) 
* standard for exchanging authentication and authorization information between parties. 
* it old standard. developed over a decade ago, but adopted by a large number of identity providers, (Salesforce, Okta, OneLogin..)
* It  allows you to sign into a site with your credentials from one of these providers. 

Service Providers vs. Identity Providers
* The SAML Service Provider (SP) – This is your application, which will ask an IdP for authentication information when a user tries to log in.
* The SAML Identity Provider (IdP) – The service that stores the user’s actual credentials – such as Salesforce, OneLogin, or an open-source system like Shibboleth.
  
A reasonable Commercial provider
* Free for personal project and as cheap as $20 for up to 1k of monthly users for commercial projects
  * https://developer.okta.com/pricing/
  * https://github.com/stormpath/stormpath-sdk-dotnet

