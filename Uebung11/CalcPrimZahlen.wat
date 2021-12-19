(module
 (table 0 anyfunc)
 (memory $0 1)
 (data (i32.const 12) "\00\00\00\00")
 (export "memory" (memory $0))
 (export "testPrim" (func $testPrim))
 (export "testPrims" (func $testPrims))
 (func $testPrim (; 0 ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.lt_s
      (tee_local $1
       (i32.load offset=12
        (i32.const 0)
       )
      )
      (i32.const 1)
     )
    )
    (set_local $2
     (i32.const 16)
    )
    (set_local $3
     (i32.const 0)
    )
    (loop $label$2
     (br_if $label$0
      (i32.eqz
       (i32.rem_s
        (get_local $0)
        (i32.load
         (get_local $2)
        )
       )
      )
     )
     (set_local $2
      (i32.add
       (get_local $2)
       (i32.const 4)
      )
     )
     (br_if $label$2
      (i32.lt_s
       (tee_local $3
        (i32.add
         (get_local $3)
         (i32.const 1)
        )
       )
       (get_local $1)
      )
     )
    )
   )
   (i32.store offset=12
    (i32.const 0)
    (i32.add
     (get_local $1)
     (i32.const 1)
    )
   )
   (i32.store
    (i32.add
     (i32.shl
      (get_local $1)
      (i32.const 2)
     )
     (i32.const 16)
    )
    (get_local $0)
   )
   (return
    (i32.const 1)
   )
  )
  (i32.const 0)
 )
 (func $testPrims (; 1 ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (set_local $1
   (i32.load offset=12
    (i32.const 0)
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (get_local $0)
     (i32.const 3)
    )
   )
   (set_local $2
    (i32.const 2)
   )
   (loop $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.lt_s
        (get_local $1)
        (i32.const 1)
       )
      )
      (set_local $4
       (i32.const 0)
      )
      (set_local $3
       (i32.const 16)
      )
      (loop $label$4
       (br_if $label$2
        (i32.eqz
         (i32.rem_s
          (get_local $2)
          (i32.load
           (get_local $3)
          )
         )
        )
       )
       (set_local $3
        (i32.add
         (get_local $3)
         (i32.const 4)
        )
       )
       (br_if $label$4
        (i32.lt_s
         (tee_local $4
          (i32.add
           (get_local $4)
           (i32.const 1)
          )
         )
         (get_local $1)
        )
       )
      )
     )
     (i32.store offset=12
      (i32.const 0)
      (tee_local $3
       (i32.add
        (get_local $1)
        (i32.const 1)
       )
      )
     )
     (i32.store
      (i32.add
       (i32.shl
        (get_local $1)
        (i32.const 2)
       )
       (i32.const 16)
      )
      (get_local $2)
     )
     (set_local $1
      (get_local $3)
     )
    )
    (br_if $label$1
     (i32.ne
      (tee_local $2
       (i32.add
        (get_local $2)
        (i32.const 1)
       )
      )
      (get_local $0)
     )
    )
   )
  )
  (get_local $1)
 )
)
