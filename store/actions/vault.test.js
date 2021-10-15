const vault = require("./vault")
// @ponicode
describe("vault.getVaultInformation", () => {
    test("0", () => {
        let param1 = [[1, 0, -100], [-100, 0, 0], [-5.48, -5.48, 1]]
        let callFunction = () => {
            vault.getVaultInformation(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[-100, -100, 1], [0, 0, -5.48], [100, 1, 100]]
        let callFunction = () => {
            vault.getVaultInformation(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[100, 100, -5.48], [-5.48, 1, 100], [1, -5.48, -5.48]]
        let callFunction = () => {
            vault.getVaultInformation(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[0, 0, 0], [100, 1, -5.48], [100, 100, -100]]
        let callFunction = () => {
            vault.getVaultInformation(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[0, 1, -100], [-5.48, 100, 100], [1, -5.48, 1]]
        let callFunction = () => {
            vault.getVaultInformation(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            vault.getVaultInformation(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("vault.replaceVaultInformation", () => {
    test("0", () => {
        let callFunction = () => {
            vault.replaceVaultInformation("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            vault.replaceVaultInformation(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
