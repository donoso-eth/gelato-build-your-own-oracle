import { expect } from "chai";
import { ethers } from "hardhat";

describe("BuildOracle", function () {
  it("Should return the new greeting once it's changed", async function () {
    const BuildOracle = await ethers.getContractFactory("BuildOracle");
    const buildOracle = await capitalize(contractName).deploy();
    await buildOracle.deployed();

  });
});
