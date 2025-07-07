module.exports = {
    branches: [
        "main"
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/npm",
            {
                npmPublish: true,
                tarballDir: "dist"
            }
        ],
        [
            "@semantic-release/github",
            {
                "assets": "dist/*.tgz"
            }
        ],
        "@semantic-release/git"
    ]
};
