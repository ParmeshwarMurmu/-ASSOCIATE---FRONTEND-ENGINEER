import { ALL_MAILS_IS_ERROR, ALL_MAILS_IS_LOADING, ALL_MAILS_SUCCESS } from "./action";


const initialState = {
    allMails: [
        {
            "id": 3,
            "fromName": "Shaw Adley",
            "fromEmail": "shaw@getmemeetings.com",
            "toName": "Mitrajit",
            "toEmail": "mitrajit2022@gmail.com",
            "cc": null,
            "bcc": null,
            "threadId": 1,
            "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
            "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "subject": "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
            "body": "Hi Mitrajit,<br/><br/>I would like to introduce you to SaaSgrow, a productized design service<br/> specifically tailored for saas startups. Our aim is to help you enhance the user<br/> experience and boost the visual appeal of your software products.",
            "isRead": true,
            "folder": "INBOX",
            "uid": 594,
            "sentAt": "2023-11-23T04:08:45.000Z",
            "archivedAt": null,
            "createdAt": "2023-11-23T07:38:46.000Z",
            "updatedAt": "2023-11-23T07:38:46.000Z",
            "deletedAt": null
        },
        {
            "id": 4,
            "fromName": "Bat Man",
            "fromEmail": "batman@getmemeetings.com",
            "toName": "",
            "toEmail": "mitrajit2022@gmail.com",
            "cc": null,
            "bcc": null,
            "threadId": 2,
            "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
            "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "subject": "Test mail",
            "body": "<p>Test mail</p>",
            "isRead": true,
            "folder": "INBOX",
            "uid": 594,
            "sentAt": "2023-11-23T04:08:45.000Z",
            "archivedAt": null,
            "createdAt": "2023-11-23T07:38:46.000Z",
            "updatedAt": "2023-11-23T07:38:46.000Z",
            "deletedAt": null
        },
        {
            "id": 3,
            "fromName": "Shaw Adley",
            "fromEmail": "shaw@getmemeetings.com",
            "toName": "",
            "toEmail": "mitrajit2022@gmail.com",
            "cc": null,
            "bcc": null,
            "threadId": 1,
            "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
            "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "subject": "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
            "body": "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
            "isRead": true,
            "folder": "INBOX",
            "uid": 594,
            "sentAt": "2023-11-23T04:08:45.000Z",
            "archivedAt": null,
            "createdAt": "2023-11-23T07:38:46.000Z",
            "updatedAt": "2023-11-23T07:38:46.000Z",
            "deletedAt": null
        },
        {
            "id": 4,
            "fromName": "Shaw Adley",
            "fromEmail": "shaw@getmemeetings.com",
            "toName": "",
            "toEmail": "mitrajit2022@gmail.com",
            "cc": null,
            "bcc": null,
            "threadId": 2,
            "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
            "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "subject": "Test mail",
            "body": "<p>Test mail</p>",
            "isRead": true,
            "folder": "INBOX",
            "uid": 594,
            "sentAt": "2023-11-23T04:08:45.000Z",
            "archivedAt": null,
            "createdAt": "2023-11-23T07:38:46.000Z",
            "updatedAt": "2023-11-23T07:38:46.000Z",
            "deletedAt": null
        }
    ],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALL_MAILS_IS_LOADING:
            return {
                ...initialState,
                isLoading: true
            }

        case ALL_MAILS_SUCCESS:
            return {
                ...initialState,
                allMails: payload,
                isLoading: false
            }

        case ALL_MAILS_IS_ERROR:
            return {
                ...initialState,
                isError: true,
                isLoading: false
            }
        default:
            return {
                ...initialState
            }
    }
}