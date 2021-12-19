(module
  (func (export "ggt") (param i32)(param i32) (result i32)
    (call $innerggt
      (get_local 0)
      (get_local 1)
     )
  )
  (func $innerggt (param i32)(param i32) (result i32)
    (if(result i32)
     (i32.eq
      (i32.rem_s
       (get_local 0)
       (get_local 1)
      )
      (i32.const 0
      )
     )
     (then (get_local 1))
     (else(call $innerggt
      (get_local 1)
       (i32.rem_s
       (get_local 0)
       (get_local 1))
     ))
    )
  )
)
