const pyramid = require('./solutions/q1_pyramid_of_stars.js');
const convert = require('./solutions/q2_array_to_object_converter');
const flatten = require('./solutions/q3_flatten_n_dimensional_array');
require('./solutions/q4_data_modelling_and_retrieval');
require('./solutions/q5_students_result_card');
pyramid(5);
convert([{ id: 1, name: 'Ankit', role: 'Developer'},
{ id: 2, name: 'Pankhuri', role: 'Lead'},
{ id: 3, name: 'Anubha', role: 'QA'}], 'role');
flatten([1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]);
