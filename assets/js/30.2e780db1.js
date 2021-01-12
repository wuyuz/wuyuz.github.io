(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{376:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"sync包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync包"}},[t._v("#")]),t._v(" sync包")]),t._v(" "),n("p",[t._v("在并发编程中同步原语也就是我们通常说的锁的主要作用是保证多个线程或者 "),n("code",[t._v("goroutine")]),t._v("在访问同一片内存时不会出现混乱的问题")]),t._v(" "),n("h2",{attrs:{id:"sync-mutex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-mutex"}},[t._v("#")]),t._v(" sync.Mutex")]),t._v(" "),n("p",[n("code",[t._v("sync.Mutex")]),t._v("可能是"),n("code",[t._v("sync")]),t._v("包中使用最广泛的原语。它允许在共享资源上互斥访问（不能同时访问）：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("mutex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mutex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmutex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update共享变量 (比如切片，结构体指针等)")]),t._v("\nmutex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("必须指出的是，在第一次被使用后，不能再对"),n("code",[t._v("sync.Mutex")]),t._v("进行复制。（"),n("code",[t._v("sync")]),t._v("包的所有原语都一样）。如果结构体具有同步原语字段，则必须通过指针传递它。")]),t._v(" "),n("h2",{attrs:{id:"sync-rwmutex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-rwmutex"}},[t._v("#")]),t._v(" sync.RWMutex")]),t._v(" "),n("p",[n("code",[t._v("sync.RWMutex")]),t._v("是一个读写互斥锁，它提供了我们上面的刚刚看到的"),n("code",[t._v("sync.Mutex")]),t._v("的"),n("code",[t._v("Lock")]),t._v("和"),n("code",[t._v("UnLock")]),t._v("方法（因为这两个结构都实现了"),n("code",[t._v("sync.Locker")]),t._v("接口）。但是，它还允许使用"),n("code",[t._v("RLock")]),t._v("和"),n("code",[t._v("RUnlock")]),t._v("方法进行并发读取：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("mutex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RWMutex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmutex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update 共享变量")]),t._v("\nmutex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmutex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RLock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Read 共享变量")]),t._v("\nmutex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RUnlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("sync.RWMutex")]),t._v("允许至少一个读锁或一个写锁存在，而"),n("code",[t._v("sync.Mutex")]),t._v("允许一个读锁或一个写锁存在。")]),t._v(" "),n("p",[t._v("通过基准测试来比较这几个方法的性能：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("BenchmarkMutexLock-4       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("83497579")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17.7")]),t._v(" ns/op\nBenchmarkRWMutexLock-4     "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("35286374")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("44.3")]),t._v(" ns/op\nBenchmarkRWMutexRLock-4    "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("89403342")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.3")]),t._v(" ns/op\n")])])]),n("p",[t._v("可以看到锁定/解锁"),n("code",[t._v("sync.RWMutex")]),t._v("读锁的速度比锁定/解锁"),n("code",[t._v("sync.Mutex")]),t._v("更快，另一方面，在"),n("code",[t._v("sync.RWMutex")]),t._v("上调用"),n("code",[t._v("Lock()")]),t._v("/ "),n("code",[t._v("Unlock()")]),t._v("是最慢的操作。")]),t._v(" "),n("p",[t._v("因此，只有在频繁读取和不频繁写入的场景里，才应该使用"),n("code",[t._v("sync.RWMutex")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"sync-waitgroup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-waitgroup"}},[t._v("#")]),t._v(" sync.WaitGroup")]),t._v(" "),n("p",[n("code",[t._v("sync.WaitGroup")]),t._v("也是一个经常会用到的同步原语，它的使用场景是在一个"),n("code",[t._v("goroutine")]),t._v("等待一组"),n("code",[t._v("goroutine")]),t._v("执行完成。")]),t._v(" "),n("p",[n("code",[t._v("sync.WaitGroup")]),t._v("拥有一个内部计数器。当计数器等于"),n("code",[t._v("0")]),t._v("时，则"),n("code",[t._v("Wait()")]),t._v("方法会立即返回。否则它将阻塞执行"),n("code",[t._v("Wait()")]),t._v("方法的"),n("code",[t._v("goroutine")]),t._v("直到计数器等于"),n("code",[t._v("0")]),t._v("时为止。")]),t._v(" "),n("p",[t._v("要增加计数器，我们必须使用"),n("code",[t._v("Add(int)")]),t._v("方法。要减少它，我们可以使用"),n("code",[t._v("Done()")]),t._v("（将计数器减"),n("code",[t._v("1")]),t._v("），也可以传递负数给"),n("code",[t._v("Add")]),t._v("方法把计数器减少指定大小，"),n("code",[t._v("Done()")]),t._v("方法底层就是通过"),n("code",[t._v("Add(-1)")]),t._v("实现的。")]),t._v(" "),n("p",[t._v("在以下示例中，我们将启动八个"),n("code",[t._v("goroutine")]),t._v("，并等待他们完成：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("wg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WaitGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  wg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要写在协程外面")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something")]),t._v("\n    wg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Wait")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继续往下执行...")]),t._v("\n")])])]),n("p",[t._v("每次创建"),n("code",[t._v("goroutine")]),t._v("时，我们都会使用"),n("code",[t._v("wg.Add(1)")]),t._v("来增加"),n("code",[t._v("wg")]),t._v("的内部计数器。我们也可以在"),n("code",[t._v("for")]),t._v("循环之前调用"),n("code",[t._v("wg.Add(8)")]),t._v("。")]),t._v(" "),n("p",[t._v("与此同时，每个"),n("code",[t._v("goroutine")]),t._v("完成时，都会使用"),n("code",[t._v("wg.Done()")]),t._v("减少"),n("code",[t._v("wg")]),t._v("的内部计数器。")]),t._v(" "),n("p",[n("code",[t._v("main goroutine")]),t._v("会在八个"),n("code",[t._v("goroutine")]),t._v("都执行"),n("code",[t._v("wg.Done()")]),t._v("将计数器变为"),n("code",[t._v("0")]),t._v("后才能继续执行。")]),t._v(" "),n("h2",{attrs:{id:"sync-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-map"}},[t._v("#")]),t._v(" sync.Map")]),t._v(" "),n("p",[n("code",[t._v("sync.Map")]),t._v("是一个并发版本的"),n("code",[t._v("Go")]),t._v("语言的"),n("code",[t._v("map")]),t._v("，我们可以：")]),t._v(" "),n("ul",[n("li",[t._v("使用"),n("code",[t._v("Store(interface {}，interface {})")]),t._v("添加元素。")]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("Load(interface {}) interface {}")]),t._v("检索元素。")]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("Delete(interface {})")]),t._v("删除元素。")]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("LoadOrStore(interface {}，interface {}) (interface {}，bool)")]),t._v("检索或添加之前不存在的元素。如果键之前在"),n("code",[t._v("map")]),t._v("中存在，则返回的布尔值为"),n("code",[t._v("true")]),t._v("。")]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("Range")]),t._v("遍历元素。")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加元素")]),t._v("\nm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取元素1")]),t._v("\nvalue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contains "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" contains "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回已存value，否则把指定的键值存储到map中")]),t._v("\nvalue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loaded "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadOrStore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"three"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("loaded "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Delete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 迭代所有元素")]),t._v("\nm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d: %s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("上面的程序会输出：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("one\nthree\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": one\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": two\n")])])]),n("p",[t._v("如你所见，"),n("code",[t._v("Range")]),t._v("方法接收一个类型为"),n("code",[t._v("func(key，value interface {})bool")]),t._v("的函数参数。如果函数返回了"),n("code",[t._v("false")]),t._v("，则停止迭代。有趣的事实是，即使我们在恒定时间后返回"),n("code",[t._v("false")]),t._v("，最坏情况下的时间复杂度仍为"),n("code",[t._v("O(n)")]),t._v("。")]),t._v(" "),n("p",[t._v("我们应该在什么时候使用"),n("code",[t._v("sync.Map")]),t._v("而不是在普通的"),n("code",[t._v("map")]),t._v("上使用"),n("code",[t._v("sync.Mutex")]),t._v("？")]),t._v(" "),n("ul",[n("li",[t._v("当我们对"),n("code",[t._v("map")]),t._v("有频繁的读取和不频繁的写入时。")]),t._v(" "),n("li",[t._v("当多个"),n("code",[t._v("goroutine")]),t._v("读取，写入和覆盖不相交的键时。具体是什么意思呢？例如，如果我们有一个分片实现，其中包含一组4个"),n("code",[t._v("goroutine")]),t._v("，每个"),n("code",[t._v("goroutine")]),t._v("负责25％的键（每个负责的键不冲突）。在这种情况下，"),n("code",[t._v("sync.Map")]),t._v("是首选。")])]),t._v(" "),n("h2",{attrs:{id:"sync-pool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-pool"}},[t._v("#")]),t._v(" sync.Pool")]),t._v(" "),n("p",[n("code",[t._v("sync.Pool")]),t._v("是一个并发池，负责安全地保存一组对象。它有两个导出方法：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Get() interface{}")]),t._v(" 用来从并发池中取出元素。")]),t._v(" "),n("li",[n("code",[t._v("Put(interface{})")]),t._v(" 将一个对象加入并发池。")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("pool "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconnection "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconnection "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconnection "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 132")]),t._v("\n")])])]),n("p",[t._v("需要注意的是"),n("code",[t._v("Get()")]),t._v("方法会从并发池中随机取出对象，无法保证以固定的顺序获取并发池中存储的对象。")]),t._v(" "),n("p",[t._v("还可以为"),n("code",[t._v("sync.Pool")]),t._v("指定一个创建者方法：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("pool "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  New"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconnection "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("这样每次调用"),n("code",[t._v("Get()")]),t._v("时，将返回由在"),n("code",[t._v("pool.New")]),t._v("中指定的函数创建的对象（在本例中为指针）。")]),t._v(" "),n("p",[t._v("那么什么时候使用sync.Pool？有两个用例：")]),t._v(" "),n("p",[t._v("第一个是当我们必须重用共享的和长期存在的对象（例如，数据库连接）时。第二个是用于优化内存分配。")]),t._v(" "),n("p",[t._v("让我们考虑一个写入缓冲区并将结果持久保存到文件中的函数示例。使用"),n("code",[t._v("sync.Pool")]),t._v("，我们可以通过在不同的函数调用之间重用同一对象来重用为缓冲区分配的空间。\n第一步是检索先前分配的缓冲区（如果是第一个调用，则创建一个缓冲区，但这是抽象的）。然后，"),n("code",[t._v("defer")]),t._v("操作是将缓冲区放回"),n("code",[t._v("sync.Pool")]),t._v("中。")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pool "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    buf "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bytes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Reset 缓存区，不然会连接上次调用时保存在缓存区里的字符串foo")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编程foofoo 以此类推")]),t._v("\n    buf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Reset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    buf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ioutil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bytes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0644")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"sync-once"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-once"}},[t._v("#")]),t._v(" sync.Once")]),t._v(" "),n("p",[n("code",[t._v("sync.Once")]),t._v("是一个简单而强大的原语，可确保一个函数仅执行一次。在下面的示例中，只有一个"),n("code",[t._v("goroutine")]),t._v("会显示输出消息：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("once "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" i\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first %d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("我们使用了"),n("code",[t._v("Do(func ())")]),t._v("方法来指定只能被调用一次的部分。")])])}),[],!1,null,null,null);s.default=e.exports}}]);