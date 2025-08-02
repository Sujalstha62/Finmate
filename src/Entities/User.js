export default class User {
  static async me() {
    // In a real app, this would make an API call.
    // For now, we'll return a mock user.
    return {
      fullName: 'Sujal Shrestha',
      email: 'sujalstha@gmail.com',
    };
  }

  static async logout() {
    // In a real app, this would make an API call to log the user out.
    // For now, we'll just resolve a promise.
    return Promise.resolve();
  }
}
