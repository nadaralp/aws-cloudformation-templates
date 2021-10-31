const aws = require("aws-sdk");
const axios = require("axios").default;

const s3Cleint = new aws.S3({
    region: "us-east-1",
});

// const event = {
//     RequestType: "Create",
//     ServiceToken:
//         "arn:aws:lambda:us-east-1:912189574234:function:test-function-nadar-alp",
//     ResponseURL:
//         "https://cloudformation-custom-resource-response-useast1.s3.amazonaws.com/arn%3Aaws%3Acloudformation%3Aus-east-1%3A912189574234%3Astack/nadar-testing-custom/173b38e0-3a4e-11ec-84d8-0ebd0f8ce063%7CMyFirstCustomResource%7Cb16e363c-3f30-4094-bb30-256ba2e496df?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211031T133344Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=AKIA6L7Q4OWTYE6UVPER%2F20211031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6af8c0ff9ec049ac1cf6fd71750597ab1ae8e5d412a8c145ab10cdcedb6874ce",
//     StackId:
//         "arn:aws:cloudformation:us-east-1:912189574234:stack/nadar-testing-custom/173b38e0-3a4e-11ec-84d8-0ebd0f8ce063",
//     RequestId: "b16e363c-3f30-4094-bb30-256ba2e496df",
//     LogicalResourceId: "MyFirstCustomResource",
//     ResourceType: "Custom::LambdaThatShouldDeleteBucket",
//     ResourceProperties: {
//         ServiceToken:
//             "arn:aws:lambda:us-east-1:912189574234:function:test-function-nadar-alp",
//         Key1: "MyCustomKey",
//         EnvironmentCustom: "Staga",
//         Name: "Nadar Alpenidze",
//     },
// };
// const context = {
//     callbackWaitsForEmptyEventLoop: true,
//     functionVersion: "$LATEST",
//     functionName: "test-function-nadar-alp",
//     memoryLimitInMB: "128",
//     logGroupName: "/aws/lambda/test-function-nadar-alp",
//     logStreamName: "2021/10/31/[$LATEST]807a091a4bc5415d8129e1bad6bec23e",
//     invokedFunctionArn:
//         "arn:aws:lambda:us-east-1:912189574234:function:test-function-nadar-alp",
//     awsRequestId: "1ed5ea66-7d2b-43de-8dcf-4a602bce4585",
// };

module.exports.handler = async (event, context) => {
    console.log(JSON.stringify(event));
    console.log(JSON.stringify(context));

    console.log("Hello World");

    // const objects = await s3Cleint.listObjects({
    //     Bucket: ""
    // }).promise();

    // Receives SUCCESS/FAIL. If FAIL is passed, stack flow stops
    await SendResponseToContinueCloudFormation(event, context, "SUCCESS");
    return "SUCCESS";

    // Catch and send fail response
};

async function SendResponseToContinueCloudFormation(
    event,
    context,
    responseStatus
) {
    const response = {
        Status: responseStatus,
        Reason: "Log stream name: " + context.logStreamName,
        PhysicalResourceId: context.logStreamName,
        StackId: event["StackId"],
        RequestId: event["RequestId"],
        LogicalResourceId: event["LogicalResourceId"],
        Data: JSON.stringify({}),
    };

    const res = await axios.put(event["ResponseURL"], response);
    console.log(res);
}

// (async () => {
//     await SendResponseToContinueCloudFormation(event, context, "SUCCESS");
// })();
