// Use this to template define new configurations
module.exports = {

    // The Client ID is required unless authType is set to "none"
    clientId: "OhVXl1wkZXzEJjDI73u1df41O9hH-e9ZUoBanbb7xfA",

    // Required if authType is set to "client-credentials" and ignored otherwise
    clientSecret: "RizUKgXJdnQ-TXOvgmt1Z-hKHGc--BmMjoia34EqiYZBR3CacFr6DEwICqhqH6RR-JKtH0FHVahw3iLzW8MWkA",


    // REQUIRED: The full URL of the server to which we can append "/$export".
	baseURL: "https://localhost:9300/apis/default/fhir/",

    // REQUIRED. Can be "backend-services", "client-credentials" or "none".
    // - If "none" no authorization will be performed and all the authorization
    //   tests will be skipped.
    // - If "client-credentials" most of the authorization tests will be skipped.
    // - If "backend-services" (default) all tests will be executed. `jwks` or
    //   `jwks-url` auth must be supported in this case.
    authType: "backend-services",

    scope: "system/*.$export system/Patient.$export system/*.$bulkdata-status system/Group.$export system/Medication.read system/AllergyIntolerance.read system/CareTeam.read system/Condition.read  system/Encounter.read system/Immunization.read system/Location.read system/MedicationRequest.read system/Observation.read system/Organization.read system/Practitioner.read system/Procedure.read system/Document.read",

    // The full URL of the token endpoint. Required, unless authType is set to "none"
    tokenEndpoint: "https://localhost:9300/oauth2/default/token",

    /**
     * By default BDT will fetch and parse the CapabilityStatement to try to
     * detect if the server supports system-level export and at what endpoint.
     * However, if the server does not have a CapabilityStatement or if it is
     * not properly declaring the system export support, you can skip that check
     * by declaring the `systemExportEndpoint` below. The value should be a path
     * relative to the `baseURL` (typically just "$export").
     * @type {string}
     */
    systemExportEndpoint: undefined, // will be auto-detected if not defined

    /**
     * By default BDT will fetch and parse the CapabilityStatement to try to
     * detect if the server supports patient-level export and at what endpoint.
     * However, if the server does not have a CapabilityStatement or if it is
     * not properly declaring the patient export support, you can skip that
     * check by declaring the `patientExportEndpoint` below. The value should be
     * a path relative to the `baseURL` (typically "Patient/$export").
     * @type {string}
     */
    patientExportEndpoint: undefined, // will be auto-detected if not defined

    /**
     * By default BDT will fetch and parse the CapabilityStatement to try to
     * detect if the server supports group-level export. If so, and if `groupId`
     * is set group-level tests will be enabled.
     * However, if the server does not have a CapabilityStatement or if it is
     * not properly declaring the group export support, you can skip that
     * check by declaring the `groupExportEndpoint` below. The value should be
     * a path relative to the `baseURL` (typically "Group/{GroupID}/$export").
     * Note that if you set this, then the `groupId` option will not be used
     * since the `groupId` is already part of the `groupExportEndpoint` path.
     * @type {string}
     */
    groupExportEndpoint: undefined, // will be auto-detected if not defined

    /**
     * Set this to false if your server does not require authentication. This
     * is only applicable for servers that support authentication but do not
     * require it (in other words auth is optional).
     * @type {boolean}
     */
    requiresAuth: true,

    // Set this to false to allow tests to accept self-signed certificates.
    strictSSL: false,

    // While testing we need to attempt downloading at least one resource type.
    // Please enter the resource type that would be fast to export (because
    // there are not many records of that type). If the server does not support
    // system-level export, please make sure this resource type is accessible
    // through the patient-level or the group-level export endpoint. We use
    // "Patient" by default, just because we presume that it is present on every
    // server.
    fastestResource: "Patient",

    // Enter the ID of the Group used for testing. Keep this empty if the server
    // does not support group-level export.
    groupId: "1",

    // Set this to true if the server supports JWKS URL authorization.
    // NOTE: These tests ate not available in CLI environment.
    jwksUrlAuth: false,

    // ------------------------------------------------------------------------
    // KEYS
    // ------------------------------------------------------------------------
    // We typically only need a private key. Public keys are only used in
    // JWKS-URL authentication tests which are not available in CLI because the
    // tester is not online and cannot publicly host keys.
    // The keys can be specified explicitly as "privateKey" and "publicKey"
    // settings, or in a "jwks" object.
    // ------------------------------------------------------------------------

    // The Private Key as JWK. Required if authType is set to "backend-services"
    // and ignored otherwise. NOTE that if "jwks" is used and a public/private
    // key pair is found in it, that will take precedence and this "privateKey"
    // option will be ignored.
    privateKey: {
	        "kty": "RSA",
      "alg": "RS384",
      "n": "vjbIzTqiY8K8zApeNng5ekNNIxJfXAue9BjoMrZ9Qy9m7yIA-tf6muEupEXWhq70tC7vIGLqJJ4O8m7yiH8H2qklX2mCAMg3xG3nbykY2X7JXtW9P8VIdG0sAMt5aZQnUGCgSS3n0qaooGn2LUlTGIR88Qi-4Nrao9_3Ki3UCiICeCiAE224jGCg0OlQU6qj2gEB3o-DWJFlG_dz1y-Mxo5ivaeM0vWuodjDrp-aiabJcSF_dx26sdC9dZdBKXFDq0t19I9S9AyGpGDJwzGRtWHY6LsskNHLvo8Zb5AsJ9eRZKpnh30SYBZI9WHtzU85M9WQqdScR69Vyp-6Uhfbvw",
      "e": "AQAB",
      "d": "rriV9GYimi5by7TOW4xNh6_gYBHVRDBsft2OFF8qapdVHt2GNuRDDxc_B6ga6TY2Enh2MLKLTr1dD3W4FIdTCJiMerrorp07FJS7nJEMgWQDxrfgkX4_EqrhW42L5d4vypYnRXEEW6u4gzkx5uFOkdvJBIK7CsIdSaBFYhochnynNgvbKWasi4rl2hayEH8tdf3B7Z6OIH9alspBTaq3j_zJt_KkrpYEzIUb4UgALB5NTWn5YKr0Avk_asOg8YfjViQwO9ASGaWjQeJ2Rx8OEQwBMQHSDMCSWNiWmYOu9PcwSZFc1vLxqzyIM8QrQSJHCCMo_wGYgke_r0CLeONHEQ",
      "p": "5hH_QApWGeobRi1n7XbMfJYohB8K3JDPa0MspfplHpJ-17JiGG2sNoBdBcpaPRf9OX48P8VqO0qrSSRAk-I-uO6OO9BHbIukXJILqnY2JmurYzbcYbt5FVbknlHRJojkF6-7sFBazpueUlOnXCw7X7Z_SkfNE4QX5Ejm2Zm5mek",
      "q": "06bZz7c7K9s1-aEZsxYnLJ9eTpKlt1tIBDA_LwIh5W3w259pes2kUtimbnkyOf-V2ZIERsFCh5s-S9IOEMvAIa6M5j9GW1ILNT7AcHIUfcyFcH-FF8BU_KJdRP5PXnIXFdYcylvsdoIdchy1AaUIzyiKRCU3HBYI75hez0l_F2c",
      "dp": "h_sVIXW6hCCRND48EedIX06k7conMkxIu_39ErDXOWWeoMAnKIcR5TijQnviL__QxD1vQMXezuKIMHfDz2RGbClbWdD1lhtG7wvG515tDPJQXxia0wzqOQmdoFF9S8hXAAT26vPjaAAkaEZXQaxG_4Au5elgNWu6b0wDXZN1Vpk",
      "dq": "GqS0YpuUTU8JGmWXUJ4HTGy7eHSpe8134V8ZdRd1oOYYHe2RX64nc25mdR24nuh3uq3Q7_9AGsYGL5E_yAl-JD9O6WUpvDE1y_wcSYty3Os0GRdUb8r8Z9kgmKDS6Pa_xTXw5eBwgfKbNlQ6zPwzgbB-x1lP-K8lbNPni3ybDR0",
      "qi": "cqQfoi0sM5Su8ZOhznmdWrDIQB28H6fBKiabgaIKkbWZV4e0nwFvLquHjPOvv4Ao8iEGU5dyhvg0n5BKYPi-4mp6M6OA1sy0NrTr7EsKSYGyu2pBq9rw4oAYTM2LXKg6K-awgUUlkc451IwxHBAe15PWCBM3kvLQeijNid0Vz5I",
      "key_ops": ["sign"],
      "ext": "true",
      "kid": "b41528b6f37a9500edb8a905a595bdd7"
    },

    // The Public Key as JWK. Required if authType is set to "backend-services"
    // and "jwksUrlAuth" is set true (and if tests are not running in CLI),
    // and ignored otherwise. NOTE that if "jwks" is used and a public/private
    // key pair is found in it, that will take precedence and this "publicKey"
    // option will be ignored.
    publicKey: {
	"kty": "RSA",
      "alg": "RS384",
      "n": "vjbIzTqiY8K8zApeNng5ekNNIxJfXAue9BjoMrZ9Qy9m7yIA-tf6muEupEXWhq70tC7vIGLqJJ4O8m7yiH8H2qklX2mCAMg3xG3nbykY2X7JXtW9P8VIdG0sAMt5aZQnUGCgSS3n0qaooGn2LUlTGIR88Qi-4Nrao9_3Ki3UCiICeCiAE224jGCg0OlQU6qj2gEB3o-DWJFlG_dz1y-Mxo5ivaeM0vWuodjDrp-aiabJcSF_dx26sdC9dZdBKXFDq0t19I9S9AyGpGDJwzGRtWHY6LsskNHLvo8Zb5AsJ9eRZKpnh30SYBZI9WHtzU85M9WQqdScR69Vyp-6Uhfbvw",
      "e": "AQAB",
      "key_ops": ["verify"],
      "ext": "true",
      "kid": "b41528b6f37a9500edb8a905a595bdd7"
    },

    // If set, this should be an object having a "keys" array of JSON Web Keys
    // containing a valid public/private key pair. NOTE that if "jwks" is used
    // and a public/private key pair is found in it, those keys will be used
    // and the "publicKey" and privateKey options (if set) will be ignored.
    jwks: {"keys":[]}
};
