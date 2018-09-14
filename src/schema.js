/**
 * Schema is used to describe a variable present in data. Schema definition is a simple key value pair.
 * Definition of schema is different for dimensions and measures with some comonality.
 *
 * Following properties are available on the schema object both for measure and dimension.
 * - `name`: name of the variable. The variable must exist in the data. Its the only mandatory property in schema.
 * - `type`: type of the variable. The options are `'measure'` and `'dimension'`. Default is `'dimension'`.
 * - `description`: additional explanation about the variable
 *
 * For a dimension the following fields are available on schema object
 * - `subtype`: specifies what kind of dimension it is. Currently the options are `'categorical'` and `'datetime'`.
 *      Default is `'categorical'`
 * - `format`: if subtype of dimension is `'datetime'` then `format` is used to parse the date format. If the date is
 *      represented as JavaScript Date object or miliseconds from epoch date then format is not necessary. With a valid
 *      {@link DateFormat | token}, any custom date can be parsed.
 *
 * For a measure the following fields are available on schema object
 * - `defAggFn`: {@link Reducer | reducer} function to be used when variable is aggregated.
 * - `unit`: unit of a measure in string
 * - `numberformat`: a function which returns the formatted value of a variable. This is only for output purpose.
 *
 * For a data
 * ```
 * Name,Miles_per_Gallon,Cylinders,Displacement,Horsepower,Weight_in_lbs,Acceleration,Year,Origin
 * chevrolet chevelle malibu,18,8,307,130,3504,12,1970,USA
 * ford fiesta,36.1,4,98,66,1800,14.4,1978,USA
 * bmw 320i,21.5,4,121,110,2600,12.8,1977,Europe
 * ```
 * The schema would be something like
 * ```
 *  const schema = [
 *      { name: 'Name', type: 'dimension' },
 *      { name: 'Miles_per_Gallon', type: 'measure', numberFormat: (val) => `${val} miles / gallon` },
 *      { name: 'Cylinder', type: 'dimension' },
 *      { name: 'Displacement', type: 'measure', defAggFn: 'max' },
 *      { name: 'HorsePower', type: 'measure', defAggFn: 'max' },
 *      { name: 'Weight_in_lbs', type: 'measure', defAggFn: 'avg',  },
 *      { name: 'Acceleration', type: 'measure', defAggFn: 'avg' },
 *      { name: 'Year', type: 'dimension', subtype: 'datetime', format: '%Y' },
 *      { name: 'Origin' }
 *  ]
 * ```
 *
 * @public
 * @module Schema
 */
