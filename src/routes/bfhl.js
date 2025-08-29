import express from "express";
import {
  normalizeNameToId,
  partitionTokens,
  sumNumericTokens,
  alternatingCapsReverseConcat,
  isNumericToken,
} from "../utils/helpers.js";

const router = express.Router();

router.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body || {};

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid payload: 'data' must be an array.",
      });
    }

    const fullName = process.env.FULL_NAME || "digisha adhaduk";
    const dob = process.env.DOB_DDMMYYYY || "30042003";
    const email = process.env.EMAIL || "digishaadhaduk2022@vitbhopal.ac.in";
    const roll = process.env.ROLL_NUMBER || "22BCE11330";

    const user_id = `${normalizeNameToId(fullName)}_${dob}`;

    const { even: even_numbers, odd: odd_numbers, alphabets, specials: special_characters } =
      partitionTokens(data);

    const numericTokens = [...even_numbers, ...odd_numbers].filter(isNumericToken);
    const sum = sumNumericTokens(numericTokens);

    const originalAlphabeticTokens = data
      .map(t => (typeof t === "string" ? t : String(t)))
      .filter(t => /^[a-zA-Z]+$/.test(t));

    const concat_string = alternatingCapsReverseConcat(originalAlphabeticTokens);

    return res.status(200).json({
      is_success: true,
      user_id,
      email,
      roll_number: roll,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum,
      concat_string,
    });
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      message: "Internal server error.",
    });
  }
});

export default router;
