# bdt
Bulk Data Test Suite and Test Runner

Note this test server does not validate against ONC US Core Implementation Guide (USCIG) but validates against FHIR STU3 with recommended BULK FHIR settings so it is not directly comparable to ONC's Inferno FHIR.  However, it is a good client to check against SMART recommended settings.

If your OpenEMR is at a different installation location than https://localhost:9300 adjust the urls in the examples below to your openemr install location

## Enable OpenEMR Export API
By default the export api is disabled.  You can enable it here:
Global Settings -> Connectors -> Enable OpenEMR Standard FHIR Export API 

## Register a System Application
Go to [https://localhost:9300/interface/smart/register-app.php]

The following Scopes must be selected (easiest to just select all)
```
system/*.$export system/Patient.$export system/*.$bulkdata-status system/Group.$export system/Medication.read system/AllergyIntolerance.read system/CareTeam.read system/Condition.read  system/Encounter.read system/Immunization.read system/Location.read system/MedicationRequest.read system/Observation.read system/Organization.read system/Practitioner.read system/Procedure.read system/Document.read
```

Put in the following for your JSON Web Key Set (JWKS)
```
{"keys":[{"kty":"EC","crv":"P-384","x":"JQKTsV6PT5Szf4QtDA1qrs0EJ1pbimQmM2SKvzOlIAqlph3h1OHmZ2i7MXahIF2C","y":"bRWWQRJBgDa6CTgwofYrHjVGcO-A7WNEnu4oJA5OUJPPPpczgx1g2NsfinK-D2Rw","key_ops":["verify"],"ext":true,"kid":"4b49a739d1eb115b3225f4cf9beb6d1b","alg":"ES384"},{"kty":"RSA","alg":"RS384","n":"vjbIzTqiY8K8zApeNng5ekNNIxJfXAue9BjoMrZ9Qy9m7yIA-tf6muEupEXWhq70tC7vIGLqJJ4O8m7yiH8H2qklX2mCAMg3xG3nbykY2X7JXtW9P8VIdG0sAMt5aZQnUGCgSS3n0qaooGn2LUlTGIR88Qi-4Nrao9_3Ki3UCiICeCiAE224jGCg0OlQU6qj2gEB3o-DWJFlG_dz1y-Mxo5ivaeM0vWuodjDrp-aiabJcSF_dx26sdC9dZdBKXFDq0t19I9S9AyGpGDJwzGRtWHY6LsskNHLvo8Zb5AsJ9eRZKpnh30SYBZI9WHtzU85M9WQqdScR69Vyp-6Uhfbvw","e":"AQAB","key_ops":["verify"],"ext":true,"kid":"b41528b6f37a9500edb8a905a595bdd7"}]}
```

## Edit OpenEMR configuration file
Grab the ClientId and ClientSecret and replace the values in the configuration file with those values
```
    // The Client ID is required unless authType is set to "none"
    clientId: "dnAKD7RJE6YTh3spLqHk37iXj_Z9cz0wAbGJy1DzPQ8",

    // Required if authType is set to "client-credentials" and ignored otherwise
    clientSecret: "p5ipAgsZsQEE6KCnDEEhmLYhZ9qnbgzmwr2Tok1rtXHpsT8P6yPKEqI6iiJnDEqQXGcJSbFKuoEEx5bZveAWZQ",
```

Modify **baseURL**, **tokenEndpoint** and **scope** as needed for your particular requirements

## Run the Bulk Data Test Runner

Install npm packages if you haven't already
```
npm install
```

Now run the bulk data test runner
```
npm run openemr
```
