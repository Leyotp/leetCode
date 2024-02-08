function groupAnagrams(strs) {
    const map = {};

    for (let s of strs) {
        // Sort the string to use as a key
        const sorted = s.split('').sort().join('');
        // Initialize the key with an empty array if it doesn't exist
        if (!map[sorted]) {
            map[sorted] = [];
        }
        // Append the original string to the array associated with the sorted key
        map[sorted].push(s);
    }

    // Return an array of values from the map
    return Object.values(map);
}

// Example usage
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
