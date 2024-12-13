-- design to be embedded
-- mechanisms over policies


-- single line comment

--[[ 
 this is a 
 multiline  
 comment in lua
--]] 

local number = 5
local single = 'also work'
local double = "also work"
local haa = [[ come one
man
also works
]]
local me,you = true, false
local noth = nil;

-- print(haa)
-- fuction definition v1
local function add(a,b)
 print(a + b)
end


-- fuction definition v2
local add2 = function(a,b)
 print("random add here happened")
end

-- add2(2,4)

-- higher order funciton (like in js or other programming that support this)
local higher_order = function(value)
 return function(anotherValue)
  return value + anotherValue
 end
end

local add_by_three = higher_order(3)

-- print(add_by_three(5))

-- table in lua (like array and map)

local list = { "first", 2, false, function() print("fu") end}
local list2 = { "first", 2, false, function() print("fu") end}

-- print(list)
-- print("is list euqal: ", list == list2, list, list2)
-- print(list[3])
-- print(list[1])

local mylist = { "first", second = 2, "third", fourth = "random_four"}
local l2 = {1,2,3, "four", random = "goal", "five"}

-- for k,v in pairs(mylist) do
--  print(k, v)
-- end

local use_it = require("use_it")
use_it.sayHi()
