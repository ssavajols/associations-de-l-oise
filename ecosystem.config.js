module.exports = {
    apps: [
        {
            name: 'APP_1',
            cwd: './tutorial-part-one',
            script: 'npm run develop -- --port ${APP_1_DEVELOP_PORT}',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        },
        {
            name: 'APP_2',
            cwd: './tutorial-part-two',
            script: 'npm run develop -- --port ${APP_2_DEVELOP_PORT}',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        },
        {
            name: 'APP_3',
            cwd: './tutorial-part-three',
            script: 'npm run develop -- --port ${APP_3_DEVELOP_PORT}',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        },
        {
            name: 'APP_4',
            cwd: './association-sportive-saint-just',
            script: 'npm run develop -- --port ${APP_4_DEVELOP_PORT}',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],

    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy':
                'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
}
