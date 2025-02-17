import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  return (
    <div className="services-container">
      {/* Animation for Services Header */}
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1>Our Exceptional Services</h1>
        <p>We provide a variety of high-quality services that cater to your needs!</p>
      </motion.div>

      {/* Service Items */}
      <div className="service-items">
        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="service-icon">
            <motion.img
              src="https://t3.ftcdn.net/jpg/03/51/02/46/360_F_351024684_qRJBZa0XlvKs5bKDHVqlcbVF2ux4tDga.jpg"
              alt="service-1"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="service-img"
            />
          </div>
          <h3>Food Delivery</h3>
          <p>Enjoy fast and reliable food delivery right at your doorstep.</p>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="service-icon">
            <motion.img
              src="https://media.istockphoto.com/id/1054862736/photo/waiter-carrying-plates-with-meat-dish.jpg?s=612x612&w=0&k=20&c=sAPvulfoGCwWvH26kd3dh7WtfMSnYdEB2eqNu3hSMt4="
              alt="service-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="service-img"
            />
          </div>
          <h3>Catering Service</h3>
          <p>Our catering service brings the best food experience to your events.</p>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <div className="service-icon">
            <motion.img
              src="https://media.istockphoto.com/id/1207487391/photo/young-chef-in-uniform-posing-in-his-kitchen.jpg?s=612x612&w=0&k=20&c=nSpfO0kTa-GkK3IktJMsl3ke_y0tInlMA3USeV37wMc="
              alt="service-3"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="service-img"
            />
          </div>
          <h3>Personal Chef</h3>
          <p>Hire a personal chef to prepare exquisite meals for you and your loved ones.</p>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <div className="service-icon">
            <motion.img
              src="https://restorapos.com/blog/uploads/What_is_online_ordering_system.jpg"
              alt="service-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="service-img"
            />
          </div>
          <h3>Online Order</h3>
          <p>Order your favorite dishes online and get them delivered with ease.</p>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        >
          <div className="service-icon">
            <motion.img
              src="https://konditor.co.uk/cdn/shop/collections/Half_Cakes_830.jpg?v=1696601579"
              alt="service-5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="service-img"
            />
          </div>
          <h3>Cake Delivery</h3>
          <p>Order fresh, homemade cakes for any occasion and have them delivered straight to your door.</p>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        >
          <div className="service-icon">
            <motion.img
              src="https://img.youm7.com/ArticleImgs/2016/12/17/66951-%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%A8%D9%8A%D8%AA%D8%B2%D8%A77.jpg"
              alt="service-7"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="service-img"
            />
          </div>
          <h3>Pizza</h3>
          <p>Enjoy a delicious pizza made from fresh ingredients and a special sauce.</p>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
        >
          <div className="service-icon">
            <motion.img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIwSeVO_jF2Ss8tS5TaxI60sRVDVSv2Hudw&s"
              alt="service-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="service-img"
            />
          </div>
          <h3>Burger</h3>
          <p>Indulge in a juicy burger made with fresh meat and delicious toppings.</p>
        </motion.div>

        <motion.div
  className="service-item"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
>
  <div className="service-icon">
    <motion.img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIWFhUXFRcbGBgYFxcYGBcXGBcYFxcYFxcYHyggGRolHhgdITEhJSktLi4uGCEzODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tMC0tLS0tOC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALwBDAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAD8QAAEDAgQEBAQEBQIEBwAAAAEAAhEDIQQFEjEGQVFhEyJxgTKRobEHQsHRFCNS4fAzYnKCkvEVFiRDorLC/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAzEQACAQMDAQYFAwUBAQEAAAAAAQIDESEEEjFBBRMiUWFxgZGx0fAyocEUI0Lh8RVSBv/aAAwDAQACEQMRAD8A+4oAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA8QHqAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDF7gLlVnOMFeQIaNUkm1ly0K06km/8SzVifUNl1KSbsVPVYBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAlAYVaoaCSYAWNavTpR3TdkSk2R4fFMePK6VTT6ujqFenK4aaHjxutlIWJWPB2MqydyDXxeLDbTc7Lh1Wup0nsv4mWUWeUsaNnDSRv09irU9ZFr+5h/t8GRY18XiSLuE/wBIHNeVrtVO+V7JGkVg12V3AF0gF35QZEdT3WdDUunBtuzfTDX/AHzIcbkdXEVGva4baQTz+fSVq61SFSNT0X56EFzhq4e0O27dCvbo1o1YbkUasTLYBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQENeoRsuLVV50/0lkrlZjsya0XO3yXia3tBtWLxjYr6OMFSNTvK4HrsNz2HcrKhpquogpTd0/p5/jIdSKZLgcbRYKjaTw87iJdbvA5XXp9n04UHOlSznHt6v0NXTk4Ko+Ph+xzed8fUKDwxwqHrDW273cN/wBF6rpy8zGPOeCxyPiShiAXUK7tQF2wA4erXcu+yxnGUMt/Q3hTjUwjoNTnNE3Mz0I9oWUqSlHPuQ6ST5NdrInWCQTI0gn5xJXN/S8qWVyrfjIVFvhr6EdauSA8ggBzoEXIiNv1Xl1N9+8ljLt7cCUXDwsqMRXBiHFrue0Ae/NcFXZynn6FLkmKzANEkj0kD6Sp76bSx9g2iTKuIGuc0QQ2zrXF4mV2UNc6U0p4Sfw9SMM6J+bMAmbXXrVO2qEeM8kbGbGExQeJC7tJq46iG5YKtWNhdSZAUgIAgCA8QBAEAQBAeoAgCAIAgCAIAgPJUXQMXVQFR1EibGvW0u3E+5WFSEKn6l+7JOf4op4UU/51R9OXDTpIknoAQbf5IXBqNJprOUrr88jWjqu4kp2T9ygGe68O5tFoaQNLRUBvEyHgG3KDMFUjqFRjsw7cdG17eZxuW45LHcaU8FhG0KQ8TEvl1dx2DzEyR8XQAWtPO/raVw2KUepemsWOMyqg7H13B9ZtN7gS2QT4j/y02Aczt781u5Lqy+6xY4DKcbgsSwPbEu062nVTk/lL2yJj8puuCerpVaTcHdZOihJQqKUujX+z6XktHMXBz6h8JjdUucZkNm7G8xaxMD1XBTo1pR3qVlzc+j1Vbs+6jTW5u2F6+bMK3GbxS5B0wD2hYPW1JQsuTeHY0HU9DRp8bVD8Ya/1EfZc7lVbvPJpV/8Az1F/puvz1NzC41mIPlpUw48nS5pPeT+iinSnOXgUV7/7PF1fYvcq6lf4EHFhrQ1rhECG6Q2B7DkpqUqsJJ1rHmz0dWUbwjf2/LmeU1HWghumxcRDfnz9Fyuk55bsjCMWsM6qlADHuDajTu6ZaOlhaF6FPS0Y2qSSl5t5X2Db4LarjwyBIHReqtTCEMshRbdkeYXPaJ8uo6p6H7hRR7U083tTz7M6ZaKso7rYN9uNaRLSD72+a9CNSMleLuczhJcmQxIiTb1U7sXZCg27IkpVQ4AtIIOxF1KafBEouLs+TJSApAQgIDyUB5KEmaggIAgCAIAgCA1auJGoNHck9AFwarVKNRUYvLu36Jfy3ZFkupomvUD2m72yRYcu8LyqVfUqum25RvbC6etrIvZWMM1xTYbqaQDs6025D/up7TqwkoqUX6Prjy/6vPoWS29SmxufCkzU4w3bzE78uy8qNfUStGN18X97ft7lak4wV2U+DwVXEOc+u5pZqsWHdo2YJ2AvPPl1XZWnC2Y7Xj1t7GEKbm7suzhoAZTp8rAAR7nZccFKo9sI3/OrZ0OO0+YfiDwgGtrVqb5rtcHVKTQC3RAnSdy4DzG3UL1tFrHRqrTVF6Xvi/KX8e5jtVnY3eFcE/CZW7EChTGMirUpufTh7Wxpgl8EeUONos7nK5tdrO91kaCk9mFKz8/KxeKtC75OeyvF1azf51UCrXxAqm0ghrQwCGjyOEA2mQBMXXTWp06VlBeGMbfN3b9THc2s9T6nhsXNN1EG9SmWsLrTA037wfoo0uolOEqT6xx8rHo6aaVSMn0afyPmuPeQSw2IMEHkQYKwpwP0WjNNbkVj3EFdCidPeKxs0M2qsIFOdRIiLmdhHda0oSv4Ti1EqO1yqcF/jpwrPGxj/ErkS2k4lzWkiQHaXAE3vuPVejT0UX4quWfI6ztyT/t6VbY+dsv7fU5OrxhiTcPAH9Ia0N9NMRC37ila21fJHiTqTm90m2/Vs7/8NOMhVcaFRoBItFmu6iNgb8lw1qMKD3QWHhroRmXJ2OJq0H1nU9UuaRAiNMgEhjh1XmSdN19jV0+McewalFJlVjMdVpuik4gOmwa2QOxAnmuepKpF7aTfyX2GZO/JHk1KuX6nVCxo2gQ53YtNvmtdDppxe5Nx/n89Ueyp0VRsqeX5vHwyXeYVqpuwah339gvWq1J9MlNPCml4sFFg82fSefDcWPnzMIJaf+JhsD3B91hTryg8Hp1dLCrHxq66Pr8H90dxkOctxDCQNL22ezoeo6tPIr1aNZVFc+d1mklpp2eU+H+dSzWxyBAeIDyUAQEiggIAgCAIAgNLG1CSGNMEg3iY5TC83VV339OjF88+3/SyWGyNmFaNWl3mjcwY5xp6KaPZ9OnOVRtuT5b+drE7nwe5fRNKmGOcXkSSYgkkk7TbddlOCpxsiHlkWdUtVJ0AFw8wB2JHL3XNrqPeUWlysr4BHzOvRq43QymwkMPmIADGzuXOP5hby77rw9Np5yhKXVcYwZSpupJI6qu806elsCBHdY19LVkr39/5PYoaeKsc83iFrnig92ipHl6Ogbzyd62XFPR1IrfHhWK6rT7fEuCHL8G9tYue8PcT1MwB+Z197fILWc+8srdc3PLjFp5JhjWYzB4jQ1xqNBaWuNyd4JIG49N1vHSQhPdazVmmnh3fl9id7lForeFuCHMd4tR8Ov5WgQ2eVwbr0ZLvltfH7mcYWydd/wCXgYd4j9Q2Nv2Vo6KKacXk0TaOW4r4Vq1HtfLA4wHPkhpOwLhHlPfY9udnCd/Fy/kfQdm9tdxHu6qx0t+cFBjuDsUz/TDaw603An/pMO+i1/p5I9iHbenqLL2+/wB0cjiK1SjUlwcx7CLEFrmn0Oy6KMbSOTtOt3une13Xp5FxW4czLMBUxgZrbJuXAOcG7+Gzm0EEethK6pVox5PlChwuMDKFWl4NIuqFv810+IwNLTppjYSRcrTeiu4tuFMDUcS+kTLY8wEw4GQB8gfkvN19dKKidGmqbZOVr4t8z6dUrPcQ8S1xuRuQe3ZfP1Jy33iZyWSvzV1ZlduIdiWNYIHguEOeLTHOSRMwvToyVtzWf3KwlaorvBcnO3HzaLdit3K7ufTw0kbWuWWFzNjhOoC1wSLKymjlnQknaxzec1NdXVTMhu4a4bjq3dZTjGTuj0tK9kdsvoWGUYw0cRTfeDLXjqCOnYwVaFdUXvlwufYpqqKr0JQ6rK9z6BRxrXfC4O9CvZhOM1ug7r0PkpRcXZ8kzavZWIMtYQkIAgJVBAQBAeSobsDzWOqiM4y4YseF1wocsk2wV+cB2mWGHDbv2PYrh11Nzh4XZ9H/AB7M6NOot2nwY4Ylw1G4eA4SdpAlvoCuum90VLzszOpHbJx8sGrVqhrXgP8ACJJOolhIE7wRAHK87qJyUE23b1JhByaSVyP+Oa2X+I540iRYtkDcHqegsuWerhG7WfodUdJN4asVwz0GGNDWNIsBH2C82PaG97bWR3rs/Yr8mhi660crl1Gxw+Y45rMRqLfM0EiBJiL/ADC5ZUpyvt6nn6qEm73wTY3BYiq0mmXkO2Dafmc0i1gLcz7rKjDxW2Xa9+TypKVy4/D7KHNZUc9jm+fZwLZgC8HnePZdvc95K80IRcTsoIsNlrxg0MgC0WKv+lYBlidLqZDgCCIIV5SUoWZB8MzbP6lLEVWU9WljyA6TETaTCtRXgTudumcZ4kzuMiwAzfAVDih56b9NKtHnHlBIn8zbiQfuAV0Xbg31RpUk9NU8Dw1ldC+yvCVMPDmnyQGeGBAY3YEX+EfYyvnd84vc3njPGWcLWSi4m4HoYisC1raRlxcaYA8VzjMum8+nUrso6qtBd27ensUlFM1MRwLWYwNwuIdTIixs03vdokHfqpVTdK9WNw1O1lKx0uD4bYKfmxFbULEOOseoAAt3XdRjp5xx8ijp36lPmPALqp1UsRpvu9k6pjTDmuj6K/8ASpvk2oQp05qU1de9jncxyzGZYR4kOpOMBzTLCehm7T91hVoThwfZ6fW6fWK3El8zoeHWsxTC97C1ptYxqtMx0XBU1LjLYviebrtX3M1Gm7v8we/wTRVFMNJfctOwIA6qq1MHG5009VB0u9bx18xg6zqkvOzDpA5zz+X+bLHV1JzpWXH72NKtWnBqnF5eX/B0ORYtpOh3SWnmOoB+qv2RWs3Sl7r+Tx+0qCaVRez/AIL7Lce0lzNU6CBMybiQCeo/ZfTUam6Lu+Op4z5sW1OoCJBkFaxkpJSi7pgM3PRSCVCSVQQEBHWqhokrCvXjRhukSlcqcxxs0yJg2I2nfaOa+c1naDq0JQni9mnfPK6Gm2zujDAY2zS7neepG8iFp2fr+5pRUldPh9fW+BJbmWFPES+P8he3GpukrENWRq5viABv+Zv/ANgf0WepmkufL6m9Cy/V6/Q1qWYUmnw3PGoklovtvztbV9VpTlGMPmY1KilK5HjMGK1N+lgcS17ATpBGrcB3Tb5LndVaik3Fcprob6er3VWMm+GmcOzF1aLnUKwIMWB6djsR3XlQjKK2zwfW93SrJVqTTRQYzHljjIJAadMGIdynt2UU6Ecp/A6ai8Hh+P8AJvcBZ3WqY6nTLQ8aHl3lkgAEmO86QD1K9TTU7STPn+0dvdtrHB9dcGMkgBoiLCLDYABentSPn7tmZqW3+/2U2IKMU202VaoJ8P8A1CSTqFiXBzC0FsAze/pC450lCM3H3++C05X5Pab2PhzXAjkRcFcS2yyitw5sKWrcArc3zOnQpufUcAO6q3bC5Kt2ycDwpkWIxz3vDSyk9xc55HlDS4mADZzo5fNRT07qSSXC5f2KRT5PruFwNKhRbRpNDabGwALdyfUm5PdepJJR29DZybd2c7XxJY8tdt9wea+Sr7qVRp8fwTcpM0e6hWDw7VScQ0AmAwzcWF5EmO3zu4R/xKN2d2S0cRVph2oue5xi1mgAyCLz0ER1WO/Ds2viMrkmwmMcXEajYj0Bud+fRdFCFVtSTLo6bKssovpgkEiXHSS/SHarw0nqPT2hfT0Kd6a35YcmmWOMwNKo11Oo1rmv3a64cLSY7WvyW7imrMRlKLujmcdkrqAmm0+GNryRP9Xud185quz50ZucMx+guVNWq4OsTuLbd59zZefUopywNxS18x1VCxgixmBz3cO8de5V5wtE3o1+7mpSyamMxdbUxtKR5gajg7TppbuvvJHS6vpIKN5N9Hb3PQ1+phOlGMOufh9yx4exVNlNz6LyWVHyXPPm0yfLe5PcmVpqqlV7ac/0rm3X34x6HiQay0fRMjzWnVYNBGwMdjIEdrL6DS6unWjaOGugRbUTuV2FiYIQTKAeOMKspKKuwU2LxGq4JgTbvefUL5rWanv7ODfXHqrp+6+pqlY5rGYh73FoidIMEja9/fZeHaVTxNrz+BEpdEZYXHyGt8kAcnaje/t7qyqSilF8CMrlnluZQCWtkTEk7D3Xs6TV1u7/ALcb+7z+fEtzg8wtUVKjqh2B0tnYRvHefsFvCr3tTdPp+MrJO5TfiLh4wzqzBcQ1292ucByvYwV3SsvEc9VYuWnAGZnEYFj4BqDUw2sHMMAn1EH3UUo7IuMV7fwaxluSZX8TZmw03MxNEaw10O1SKZj4gSJF723heU9bJzdOpDxLHP8A33OzTVp0ZqUH7+vofJcVjtVU0mubVNocwyCIBn25ztC7FDbDfLHufVUtXCtG8cPyOq/DTDOpY4PcIDmPbzkW1f8A5Wum1EHOyZ5nacZOn8T6/iWyR5QRM3jyxsYO9163J87wa2CqfE3ylrTZwdO94N7EfLaFKDJHU6cubH+oDq6EABpJ5bEDv7Kto39xlo+MV+Hc2w1VzMG5zmajEPYABNpDz9l5zoR3O6+RzypzX6WXmCwPEDwA7+GZ3qOEj1FOZ9lZaRPmTLRVTqy1wf4eU3vFXMMQ/EvGzB/Log/8IOo/MLaFCnDgnYuXk7nxqdJgA0taBYAQAOgAWsqkKcbt2RcoHZm6s8NaxwbJmYlwHpIAXjVdcqtTu4f9/wBE2KTi/MGsp+KRBY9ocP8Aa46ZHvH1XJUS1LcbWkvz0IlhYNfBYhtanBgj/CD6rjjdYYTUkRuIJ8zzYiJJ67kDdUjeTsmPcwyeg/UGiNLi0NA+KZMyenSy9ihSwl1ZeCPpNFuloHQD7L6BYQIzijOzY5y6DcwItubGD/UFDk7k7VYpuK80DdNLzGYc4NaTa8AkWEkE3jZcGvnhQ6dS0acpcHMYrNcOWOv5gLAgiHRbsvKmlbgmdGcbJrngoqOKaXFzNzO/e59N1yyhJyPTodnwit9Z/A08XRdVpug6XE6TI8hYLEEjnJB1d+y2hanJKS9V7/Y8qvtcntwjbynJ30g9pAaNIvqnUY2737BWqJ1ZKxzxi0dXwrgXBwcBECI5Rzjpf7r1NFolTn3nUskd5RXrFjYCggmQGtjah0mL2K59Vd0ZJeTJXJzNbHsp0IJAeSZbNxPyXxk/BQUYvxXzbpfn89jRyS5KJz3uY5zbkhotz3s08if1WMFtW18FHlXKbBBzC+oWvDWCLtInVyPp1W01uSStkwhdXZb4UioJdTb4YE+aCCZ3IPO3NRSUlO6Z0wqSWVg3aWYt1BrQNES2LAdIHRdlNKEhuubPEpFTA1wOVJx9wJH2Xq7lKBjV/Szk/wAGsxNOniy+9EOpkACT4jg6Y/5Q36LSpXjQjvqf7Jo5hb1+xNxbizi6gPh6GgnYyT0LjzO/zXkVdXGpNzjFL86mqbRq5fw3Qa5tUOcKoBDgY0ua72sQQOZ5rnraybpOEvNNHpaCs41LFvVYaNShUa0kCswPgbNcdM25SVl2ZVTrrc+D1K099OUX1R3rnEm7oAgi+/ODbl2X28XdcnzLi/I1KTaYJe4gOc2HgQRsBFt4i3qVCcU73LbJvFjKjiadNrWNJhoAEyTAsLndO8iie5k8nF4njOgcRUY10aHFuxg6fKSCBG4XDXrbZXKq1rM3m8QyzW0ahMAAt1E9A0kSuf8ArVe1yrsZYHPX1GumlUpvaSCyo2DG7XDkWkc78+i5dTralKpturMi10aH/iFRxIeHF3QwPldc9SqqvivcpnqWmFIYA7V5ogC0CbmANytKcYU33n+TJOQ40xVRriPDL2Ob5jBgBrp3GxnrZVp0bzcm7MpNmvwlUIdVaJgRHsTP3Cz1CwpdStLlkvFWZspsFQj4SAWjne/vH1ATRw72aVi82jpeFy1p8SoC0BstDgQZI6en3XqaevRhPxSWDRcEmfcXaGuDGgkgxJIb0uQuv+upybUXc7qGnVThnmWY2vUY11d2kO1FrG28mrySd9oWM9S+rwdkdNFXsuCTNan8sgWJBA7d1Z+KIjC0j41neYlumTJjkbE9VFKgpl9XW7t3SKluPcbkmeV7D0XoU6UIfpR406s5u8mWmV8Q16b2w8kAixMjfZWqUo1FaRlY+s4NofB5GCPdc1PTwg8IttsdflmG0hdkVYqWtFqkGyAoIPXmyA1qqhg5XiDJXPksj3my8TW9md7PvIuxV8WKbFNqsqgO0N1Nb5naixpEam6QJJJ2MgCPn4bp04ScZXui7buaOZZg1jjU1yS0jQB5SYuQQY0zfrsrQj3mbWRRys73K7BYKpi5DXPp07y4EgRzBGx/zuvU0OglPxPglcGrXzgsqGiA4mmdJLRO0QfLyWtbs5w4YR1eOr6MDWc8EE0nmDY3aQAs6a8DRFR2i2fNeAKuMbVcMLR8WkbVdTiym21nazZru0Exy6b6zS069O83Zrh/x6ldPJqJ32Y41tEfCCe8x+i+dp0ZKWTeUkbGYHENw7nMZSL9Gpsap2mLje66ppRtGosPrbg6NPdSUl0PMJm0tB6heVOg4ysfS9ypq8Sepmrj8NQi2xg/dd1LX6imrbr++Si0cOsTTrY+qf8A3j7QFs+0tRLrY1jo6X/yap8c3NZxHTdR/wChU82JaWj5FRlHD9CnWfVe0kvefI+TTA3c5o/qJ6kgclvW7QqVIbce/U8HVaPZPwJtGeaa6jjRhoY1ztGloa1rTdo6WBj2WFPZH+51fObm9LRQlTUppkOGx2JogMeS9rZ0mbgHlt5m9BaJ3V6kKNbKwTLsrcrwZjm1UV6ZBrPpHmWs1SOYFxBU6eKpTvtUvjY8+t2ZWQyLFYW7ZcIYTpc3T8O5kG5jutp0Zt3kv3OKVF0+S7o5Fh6tEPeyHvAOoEh1xMT22vItstotxikitlYlyrJ/4fW5jyQ8t+KCRE9Indc2oi5uL4sIrbc5viSqWVmhtNxc9wAcfhMmIbB79lrRpLa7vCKSdmdbi658Nr9iD9rfsuH/ABTOhHKZg9rq0AaWMcSW76zFpn8t5XVC8YXXLXyR9D2TpN/jfH1OmwOP1+bo2PlK7d90mejWoKGPMjq48upOqOsBrDT32b+66Iy8F2cdWkoz2o+PZ7SLKgBvA5XFu/Rd2mzC55vaD/uIhypoNVmqNOtuoFwb5QQXDUdrSJ7rqieWy5pMbWxRNJjWAvJDGkuaxs/1HeOvMqWyUrn2PhmmHWizQB78gs4q5eorHY01cyN2iEFicKCDJAQvp9Nun7IDWqU7dR/m6hogpc1wM9b7QCfmOa+b7T0dnv8APnBeL6HzjiimBpp05DQDN7uJJl0Dv9guOjUUndLHS/JhONsIpsfxLXpUKdKg8Na3e1yPU85X1emf9uNjWKJ/wmxbn4nE1qlQjTTBeSYbDnEuc/uAz2Erz+19zhG3mXifRce/DYhmh2mrTInc6XCx3buNua+bjqqlGbaXHR/nJaSjJWZEMbTADKbWhjRAawBrG9AALBdi1Mqz3TyZYXBSPpDEYlrN2t8z+mkb/oPdTT8c79COWdVmlMAwNgP0iy01sYylZdDem7HI5vgHMmpSuN3N/UdFyKmmrM9Chr50fVFBRzIvB0gyNxzV5afa8npU+2aTWU/z4lZic+APll3cbfVdMNG+uDb/ANmlbCf7fctMuz2QLrlraOzO6lVpV47kWzM27rkemL9xExrZp6KY0CVRSKrE4l9QwxsgbmQI7dV30dNi7M6lSMHY08cyq0Hy/ULohRV8s46tVNYRp5NgK1YmbDWAf9rTd5naTAAG9yt5uEbJHzGtzPJ9AfjA4hjA6o5ti1gBA9SYaPSVg4tnFfoTPdW0wKNQX/2bR2duodKXkxdnF4vF1f41viU3NDSGsDhvMy4eytUglSdnnr9jO/iydHnmKAoN7n/PsuPbfakdCZzGc06jGUq5+F4ie7ZAn1aPouqjBONj6jsXVLa6T5XHs/8AZucN46W1BziR+q0UbYPZ1avtZqVcyc5rWUyQQ4EdiDJnry+q1V1iRyypKUnJlZmWQGr5gYgQAey9TTRtA8DtF7qpo0OF3SNbrc43+a6lY8xwZ1PD/DxaYpg3O/PtKXFrZPq2TYDwabW7u5+6m1ijd2XGHaoIN1gQklCgqeoAgI3snseqA1qtMEEOAg/L3CiUVJWYOcz3hWlXMuLgeRB+y4pdnUW9ywyGrnzjirgurRYS0GowSZG4uSZb09F0aelOmtssroSj56zFOo+IGOI8RjmPb/U02IcFpOEZW3LjJLPoHAlLTgnF+q2qIaAOTtOrc7zt1vsvle0lGVa/XH/SErRNepm5FMnxGkm8MNr7Bo3PrzULTtz2pNL85MG2kdnwXgfBoufWbNV5EyJ0QAQzaxvJ7mOSjUSUU9qul9Tooxss8lHxTxdVp1XClXaabCZDWea0ag8u+ISD8MfZb0ozqQUJqz8/MpOo1LDOhw+Y0qrWVWuaGOaC8iNI8oJg9iCFh3kVVcJYt+cG18XRzuY5phagcyk0Mh+qR5NYmCbXBi60nfnb7dSqmnwfPs7mlV8SkSZfGlwBkH81trC69LTuNSG2fzIu72ia2aYrQA+mYJFwNp/RaUae/wAMkdEKtSl4k2jd4YxdStOp1wbLLV0IU2lFH0nZeqqVqcnN3aZe4/LqsBzCY3sd1zQUV0O9zbxc3sixjWjS4Ge5P2U96o4Zz1aUmsFzisqZWaXNn5q7jB5RwTnKOGU+KxrwGYdrvPq0yLRJsLdBBXNFWbdj5zU/rZ9HybLWUKYa0crk7k8yV6NOKhG5RKxtuqiLBQ6l1gmxBicDTqDztB9Rf5qHCMuQ0cPxtlT6VFxZLmhwcOZadiD1EH2hcroKE0+hR4McNRZicFTpPkeRsHm1zWkz6zP1WKq93J9bN/I6dNXlRmpxOZZhn4aqBIPcSA6wmPmF1wTqLdE+r0+vp16VmWdGm17ppshzuZFh1K1hSbfBedVQj4ngtDhwAAF6UcKx8/VlubkzZwWX6iIElaI5ZOx2eV5a2iASJeforpWMJSuyzpMUkG/RYoJNhgRkMkUFQgCAxIQET2oDXMhSSRPa11iI+yEHOZ1wRhq93UxPVqPIOcr8JV8NTezDVfI6Za4Tyix5GF5mo0Eaj3dSG3axyXD2FdhqxpvLmMqNLXEbtEEy07tt0XFqqMppN8plF4T6Azhmk+i1tOs97BBbLtURcQdwZ7qn9NFvcnf88i6WDls24H0glsGdwZG/dRKpOHUlxViGjlZZhH0GA/A74dwXOLpaOek/2XG5ueoVV9LfHoLeGx8+p13MqFtSdcQfXf2XtuKnC8eDBLJ2GEz/AAuCoeeiKuKcNUua1wa0jyNDj8BI82xsR2C7dPSjCN7HTmxx+PzTxqjnljQ12zAAAB0EBauEX0LxnKPUxwFYMJ02mD8lxamk3Y97sivFSa4udVlXELh5TDh3XmyhKOUfRyo06iusFuMXh6kEjS7rNis5O+LGL084Z5RZYvO20aBdGo7MA/O47D0tJ7AropcWPF7Qiqa3HL6y2vR1nzl7HOPcukrLlNny1aV5H2WjsD2XZZtXLkQi8hZXJMajh33COSsDzNKbXUnBwtpM/JaVbODuVPn2X4qKcOEAERHIbA9p6Lxn+p2Kx4NvDua9mmsPM2dLgIntHVetQjUpxVvkddGUoPBnhMN0XpLJ2SqX5LXAZQ552WkYmE6qR02CwTKIgCXdei1SscrbZuU2TcqSDeo00JNlrUBK0KpRnqAIAgCAxIQEb6aA16uHQlGm8PbsVJNjw41ps9vv/cfshFjSx+TUK7TEAkETAMH2VJ01JWKuNz5xnnDGY4e9AOcIHnpP5iQDp3Fo6rz6ukd07X9jCUJLgqK2f5iwNa41pBHxNJJH+6QVhKgnKyuviyrlULXKc1qua41WkOBsSAAQRyG47mOi5Xpspq9zWE5Wyc7n1ClUeX+Uu67H1W9PfHHBNzlcdh3G5JLo3N5iwv6W+S9qGYqxqjUwlM6wHTEifTmrokssLgfFqhtM2LngAkaoDS64+ix1EkoNm9Cr3ctx7h5BtdcErH1Gn1sXG7Zctwzjvb9PVcUqiOev22o4pZfn0/3+ZNp2AqRNPW+oQQIBhs7xNge6rCpd2eEfParVVq7vJt/QnwfB9d7deIqkvg6Wg2HSTu4jpstp14xxCODj2eZ0nCnGIp/+mxjxrZYVJBa4C2/Iq0JbVdJ7X80IythncMxFOoPK4OHYz9le8Jo0M9TWhMRRJyfFfFbGB1Gl56rhAA2E9SqXdbwx46v7GcpdEV+HoNJEC5AnmSWgC/yXTDSw6/Q0SL3B5JqMukrsjSSLKVuC9wuUMZc2C1USXUZt+INmCB1WlivJLRpIDeo0lANpjUBI0KGQzJQQEAQBAEAQBAeEICN9IFAadfAgqxNysr5eRcWPZLEkHjVmc59f3CWFjx2YsNqtKfYO/uliNpiKWEfyaJ9voVVwRFjWxfCmGqC7Wn1H6qvdxFjl89/DfU3+RpHaxH9leMbcA4HH8DY6mTqpGOokj6BWsSbOXZAGAag4vMXjTBF7dFzVqe/BbbcssHw8C4uABDu0X6jl9Oa456ZtWTKuMuGWdbKiAAGOge6U9NsK7GyKjRLDbUPmFd0YPlFlGxLjyajA1xIHOLT6xusVp4J3SIcWykdw+0/C0n0H7LTuZdCuxEbMmxdL/QdUbfYB0fRQ9M2/FG5Xu/JmzSyTNax8xqAc9TiAb+yutDDyI2N8s6DI/wAPnNOqq8F3a5/YLqhQjHgvGKR3GAyWnSFh7m5Wih5FjbNZrfhElaJAiu7dSSbFKioJN6jSQk2mNUAlAUFTJQQEAQBAEAQBAEAQBAeQgMHUwUuDWq4MFWuTc0a+XjorXJNCtlg6KSLmqcuLfhJHoSPsgGqu3Z5PqAfuosDJuY1hu0H5hLA9OZA/FS+x+4CjaD0Yqgd6cf8AL+xTaDPxMOe3zH6KNoHh4c8x8wm0A4PDn+n/AOKjYDNmHoDYgf8ASp2kEgbSH5vqE2gz10h3+ZU2B47F/wBIj/OgU2JIiXO3KkEtOigNqlRUEm3TpICdjVDJJgFVlWzJQQEAQBAEAQBAEAQBAEAQBAeQgPC1ARvohTcm5A/DK1waz8L2VgQPwY6ICB+CCkETsCEBGcF2QGP8GgH8IoBkMOhBmKCAzbRQEraCEkzKCA2GUVBJO1iEkzWqGwShqq2VbMlBAQBAEAQBAEAQBAEAQBAEAQBAEAQHkIDwtQXMHUQp3E3InYZW3AjdhlNwRmgpBgaCAwNFAPBQAUUBmKSE2MxTQEgagMgFBJK1qhsEoCrcq2ZKCAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDyEALUBiaYU3ZNzA0Ap3C5gcOp3E3MTQKncgeeGVNyRpQHoaoBK1ihsXJAFW5W5koICAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA8QCEAhAEB6gCAIAgCAIAgPEB//Z"  // استبدل بالرابط الصحيح
      alt="service-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="service-img"
    />
  </div>
  <h3>Fresh Salads</h3>
  <p>Enjoy a healthy and refreshing salad made from fresh, seasonal ingredients.</p>
</motion.div>

      </div>

      {/* Footer with Animation */}
      <motion.div
        className="services-footer"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <p>Ready to experience the best food services? Let's get started!</p>
        <button className="contact-us-btn">Contact Us</button>
      </motion.div>
    </div>
  );
}

export default Services;
