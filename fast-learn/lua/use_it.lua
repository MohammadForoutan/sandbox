local ex = {}

local sayHi = function() 
 print("Hi from use_it module")
end

ex.sayHi = sayHi

return ex
