import { generatePassword } from './passwordGenerator';

describe('generatePassword', () => {
    test('should generate a password of the specified length', () => {
        const length = 12;
        const password = generatePassword(length, true, true, true);
        expect(password.length).toBe(length);
    });

    test('should include uppercase letters if specified', () => {
        const password = generatePassword(20, true, false, false);
        expect(/[A-Z]/.test(password)).toBe(true);
    });

    test('should include numbers if specified', () => {
        const password = generatePassword(20, false, true, false);
        expect(/[0-9]/.test(password)).toBe(true);
    });

    test('should include special characters if specified', () => {
        const password = generatePassword(20, false, false, true);
        expect(/[!@#$%^&*()_+\-=[\]{}|;:",.<>?/~`]/.test(password)).toBe(true);
    });

    test('should not include uppercase letters if not specified', () => {
        const password = generatePassword(20, false, true, true);
        expect(/[A-Z]/.test(password)).toBe(false);
    });

    test('should not include numbers if not specified', () => {
        const password = generatePassword(20, true, false, true);
        expect(/[0-9]/.test(password)).toBe(false);
    });

    test('should not include special characters if not specified', () => {
        const password = generatePassword(20, true, true, false);
        expect(/[!@#$%^&*()_+\-=[\]{}|;:",.<>?/~`]/.test(password)).toBe(false);
    });
});
