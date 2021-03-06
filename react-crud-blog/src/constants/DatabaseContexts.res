type message = {"id": string, "message1": string, "authorId": int}
type user = {"id": int, "username": string, "password": string}
type userDetails = {"userId": int, "bio": string, "followers": int, "profileName": string}
type userProfiles = array<{"userId": int, "bio": string, "followers": int, "profileName": string}>
type followData = array<{"followId": int ,"follower": int, "follows": int}>