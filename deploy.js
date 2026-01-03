import { execSync } from "child_process"

const BUCKET_NAME = "mycompany-frontend-prod"
const DISTRIBUTION_ID = "E123456ABCDEFG"

function run(cmd) {
    console.log(`\n> ${cmd}`)
    execSync(cmd, { stdio: "inherit" })
}

try {
    console.log("🚀 Starting deployment...")

    // 1. Upload to S3
    run(`aws s3 sync dist/ s3://${BUCKET_NAME} --delete`)

    // 2. Invalidate CloudFront
    run(
        `aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths "/*"`
    )

    console.log("\n✅ Deployment completed successfully")
} catch (err) {
    console.error("\n❌ Deployment failed")
    process.exit(1)
}
