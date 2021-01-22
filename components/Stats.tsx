const Stats: React.FC = () => {
  return (
    <div id="product" className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">О продукте</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Благодаря продуманной карте локаций, мы покрываем показами всю активную часть населения.
            Каждая локация оказывает комплексный эффект на потребителя за счет звукового и
            визуального воздействия.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Запоминания динамического объекта
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-yellow-600">80%</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Круглосуточная трансляция рекламного ролика
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-yellow-600">24/7</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Действующих мониторов
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-yellow-600">10</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
