function palindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === str;
}
