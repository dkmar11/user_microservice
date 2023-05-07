
const SetUserMongo = require('../../src/services/setUserMongo');

describe("Test setUserMongo", () => {
    // Tests that the class can successfully connect to mongoDB. 
    it("test_connect_to_mongo", async () => {
        const setUserMongo = new SetUserMongo();
    });

    // Tests that the class can successfully save a user to mongoDB. 
    it("test_save_user", async () => {
        const setUserMongo = new SetUserMongo();
        const user = {
            name: "John",
            lastName: "Doe",
            ci: "1234567",
            email: "johndoe@example.com",
            direction: "123 Main St",
            zone: "Central",
            number: "555-5555"
        };
        await setUserMongo.set(user);
        await setUserMongo.disconnect();
    });

    // Tests that the class throws an error when trying to save a user with missing fields. 
    it("test_missing_fields", async () => {
        const setUserMongo = new SetUserMongo();
        const user = {
            name: "John",
            lastName: "Doe",
            ci: "1234567",
            email: "johndoe@example.com",
            direction: "123 Main St",
            zone: "Central"
        };
        await expect(setUserMongo.set(user)).rejects.toThrow();
        await setUserMongo.disconnect();
    });

    // Tests that the class throws an error when trying to save a user with invalid fields. 
    it("test_invalid_fields", async () => {
        const setUserMongo = new SetUserMongo();
        const user = {
            name: "John",
            lastName: "Doe",
            ci: "1234567",
            email: "johndoe@example.com",
            direction: "123 Main St",
            zone: "Central",
            number: "555-5555",
            invalidField: "invalid"
        };
        await expect(setUserMongo.set(user)).rejects.toThrow();
        await setUserMongo.disconnect();
    });

    // Tests that the class can successfully disconnect from mongoDB. 
    it("test_disconnect_from_mongo", async () => {
        const setUserMongo = new SetUserMongo();
        await setUserMongo.disconnect();
    });
});